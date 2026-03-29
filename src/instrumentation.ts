import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
  ATTR_SERVICE_NAMESPACE,
} from "@opentelemetry/semantic-conventions";

import packageJson from "../package.json" with { type: "json" };

// This is validated in the env validation but is used directly here because to
// pull from env.ts would create a circular dependency.
const exporterUrl = process.env.OTEL_EXPORTER_URL ?? "http://jaeger:4318";

const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: packageJson.name,
    [ATTR_SERVICE_VERSION]: packageJson.version,
    [ATTR_SERVICE_NAMESPACE]: "my-app",
  }),

  traceExporter: new OTLPTraceExporter({
    url: `${exporterUrl}/v1/traces`,
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: `${exporterUrl}/v1/metrics`,
    }),
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
