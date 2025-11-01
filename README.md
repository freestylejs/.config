# @freestylejs/config

This package provides shareable configurations for Biome and TypeScript for Freestyle.js projects.

## Installation

```bash
pnpm add -D @freestylejs/config
```

## Usage

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

You can then customize the configuration to your needs.
