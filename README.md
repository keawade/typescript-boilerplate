# Node + TypeScript boilerplate

This boilerplate repo pulls together a demo of what I consider to be some of the
current best practices for generic Node + Typescript development.

## Highlights

- Node + TypeScript
  - [Node strip types][node-strip-types]
  - [TypeScript `--erasableSyntaxOnly`][ts-erasable-syntax-only]
- Containerized build
- Testing with [`vitest`][vitest]
  - Unit tests
  - Integration tests run against containerized build
- [Zod][zod] env validation

[node-strip-types]:
  https://nodejs.org/docs/latest-v24.x/api/typescript.html#type-stripping
[ts-erasable-syntax-only]:
  https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/#the---erasablesyntaxonly-option
[vitest]: https://vitest.dev
[zod]: https://zod.dev/

## Getting started

`npm run dev` recommended for feature development.

```sh
npm ci
npm run test:unit
npm run dev
npm run test:integration
```

### Container

Containerized build provided for testing out more infrastructure dependent
things like OTEL tracing.

```sh
podman compose up --build -d
npm run test:integration
podman compose down
```

## Notes

- Type stripping is such a nice approach to TypeScript use. No more fiddling
  with sourcemaps or compiler build steps. Just `npm ci` and `node src/main.ts`.
- I was initially using `node --watch` for the `dev` script but I've gone back
  to `nodemon` because I kept running into an issue where `node --watch` would
  restart once or twice and then never trigger a restart again. Not sure what's
  up there but `nodemon` still works great even if it is a bit of a bummer to
  expand `node_modules`.
- I was initially using `node --test` and while I'm still excited for a
  potential future where I can avoid yet more dependencies in `node_modules`,
  tools like `vitest` Just Work TM and imo are nicer to use day to day.

## TODO

- Set up CI
  - Formatter check
  - Type check
  - Linter check
  - Unit tests
  - Build image
  - Integration tests against image
  - Publish image
- Make OTEL optional
  - Currently baked in as required when running the image but I want the
    flexibility of not turning on the instrumentation
