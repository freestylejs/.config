# @freestylejs/config

This package provides shareable configurations for Biome and TypeScript for Freestyle.js projects.

## Installation

```bash
pnpm add -D @freestylejs/config
```

## Pkg Usage

### `Biome`

To use the shareable Biome configuration, create a `biome.json` file in the root of your project and extend the configuration from this package:

```json
{
    "extends": ["@freestylejs/config/biome"]
}
```

### `TypeScript`

To use the shareable TypeScript configuration, create a `tsconfig.json` file in the root of your project and extend the configuration from this package:

```json
{
    "extends": "@freestylejs/config/tsconfig",
    "include": ["src"]
}
```

For TypeScript 7 (no `baseUrl`, relative `paths`), use:

```json
{
    "extends": "@freestylejs/config/tsconfig-ts7",
    "include": ["src"],
    "compilerOptions": {
        "paths": {
            "~/*": ["./src/*"]
        }
    }
}
```

### `Vite+`

Shared defaults for Vite+ projects:

```ts
import { defineConfig } from 'vite-plus'
import { fmt, lint, pack, test } from '@freestylejs/config/vite'

export default defineConfig({
    fmt,
    lint,
    pack,
    test,
})
```

The `./vite` export is additive; Biome and the existing TypeScript config remain
available for projects that have not migrated yet.

## Template Usage

### `VSCode` Settings

To use the recommended VSCode settings for Biome, create a `vscode/settings.json` file in the root of your project and add the following configuration:

[See settings.json](./src/vscode/settings.json).

### `Scripts` Configuration

To use the recommended scripts for Biome, create a `scripts/scripts.json` file in the root of your project and add the following configuration:

[See scripts.json](./src/scripts/scripts.json).

### `Git` Commit Convention

[Check convention reference](./src/commit/rules.md).

### `Git` Ignore Configuration

[Check ignore reference](./src/gitignore/gitignore.md).

### `NPM` Package Configuration

[Check package reference](./src/package/package.md).

### `CI` Configuration

[Check CI reference](./src/ci/ci.md).

## Versioning

1. Commit all files

2. Update pkg version using

- patch: `pnpm version patch`
- minor: `pnpm version minor`
- major: `pnpm version major`

3. Publish via `pnpm release`

4. Push commits and tags via `pnpm release:push`

5. Done.
