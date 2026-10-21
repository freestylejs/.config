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

### `Oxc` — Oxlint and Oxfmt

Shared Oxc defaults are exported as plain objects.

`oxlint.config.ts`:

```ts
import { defineConfig } from 'oxlint'
import { oxlintConfig } from '@freestylejs/config/oxlint'

export default defineConfig(oxlintConfig)
```

`oxfmt.config.ts`:

```ts
import { defineConfig } from 'oxfmt'
import { oxfmtConfig } from '@freestylejs/config/oxfmt'

export default defineConfig(oxfmtConfig)
```

Project-specific overrides belong in the consuming repository.

### `Toolchain`

The shared version manifest is available for templates and sync checks:

```ts
import { toolchain } from '@freestylejs/config/toolchain'

console.log(toolchain.typescript)
```

### `Vite+` (legacy)

The `./vite` and `./biome` exports remain available for repositories that have
not migrated to the Oxc toolchain yet. They are not used by the current
`.pkg` reference or generated templates.

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
