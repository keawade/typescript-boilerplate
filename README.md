# Node TypeScript Strip Types Demo

This repo offers a boilerplate implementation of a simple node application
demonstrating use of a couple things I've found fun recently.

In particular this repo aims to put together a minimal node application with
TypeScript. The recent type stripping options has made this particularly
enticing.

- [Fastify][fastify]
- [`node --experimental-strip-types`][node-strip-types]
- [TypeScript `--erasableSyntaxOnly`][ts-erasable-syntax-only]
- [`node:test` library][node-test]
- [`node --env-file=`][node-env-file]
- [`node --watch`][node-watch]
- [Zod][zod] env validation

[fastify]: https://fastify.dev/
[node-strip-types]: https://nodejs.org/docs/latest-v22.x/api/all.html#all_cli_--experimental-strip-types
[node-test]: https://nodejs.org/docs/latest-v22.x/api/test.html
[node-env-file]: https://nodejs.org/docs/latest-v22.x/api/all.html#all_cli_--env-fileconfig
[node-watch]: https://nodejs.org/docs/latest-v22.x/api/all.html#all_cli_--watch
[ts-erasable-syntax-only]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/#the---erasablesyntaxonly-option
[zod]: https://zod.dev/
