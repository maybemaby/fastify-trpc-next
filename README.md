# Fastify tRPC Next.js Starter

Turborepo setup for using:
- Fastify
- tRPC
- Next.js
- ESLint

## Getting Started
```bash
git clone git@github.com:maybemaby/fastify-trpc-next.git
pnpm i
```

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a Fastify + tRPC app
- `web`: a [Next.js](https://nextjs.org/) + tRPC app
- `schema` for sharing zod schemas between the `api` and `web` apps
- `ui`: a stub React component library shared by the `web` application
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `eslint-config-custom-server`: `eslint` configuration base for server apps
- `tsconfig`: `tsconfig.json`s used throughout the monorepo


Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```bash
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm run dev
```
### Test:E2E

To run E2E tests with cypress and the api live

```bash
pnpm -w run start
pnpm -w run test:e2e
```