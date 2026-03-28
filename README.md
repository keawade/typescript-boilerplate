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
