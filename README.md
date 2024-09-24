# eslint-interactive bug repro

https://github.com/mizdra/eslint-interactive/issues/364

## Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `ESLINT_USE_FLAT_CONFIG=false npx eslint-interactive src/index.ts`
4. 1 lint error is found
5. Choose the `disable per line` option and proceed
6. CLI says `Fixing done`, but fix is not written to file system