FROM node:24-alpine

ENV NODE_ENV="production"

WORKDIR /app

RUN npm i -g npm

COPY package*.json .
RUN npm clean-install --omit=dev

COPY tsconfig.json .
COPY src src

EXPOSE 3000

CMD ["node", "--import", "./src/instrumentation.ts", "src/main.ts"]
