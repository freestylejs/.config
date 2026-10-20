/**
 * Shared Vite+ defaults for freestylejs projects.
 *
 * Consumers compose these blocks into their root `vite.config.ts`.
 * Package-specific entries stay in each package's config.
 */

export const fmt = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    jsxSingleQuote: false,
    quoteProps: 'as-needed',
    endOfLine: 'lf',
    sortPackageJson: false,
    sortImports: false,
    ignorePatterns: [
        '**/dist/**',
        '**/build/**',
        '**/coverage/**',
        '**/node_modules/**',
        '**/__snapshots__/**',
        '**/.*/**',
        '**/*.d.ts',
        '**/*.config.*',
    ],
}

export const lint = {
    categories: {
        correctness: 'off',
        suspicious: 'off',
        pedantic: 'off',
        perf: 'off',
        style: 'off',
        restriction: 'off',
        nursery: 'off',
    },
    options: {
        typeAware: false,
        typeCheck: false,
    },
    ignorePatterns: [
        '**/dist/**',
        '**/build/**',
        '**/coverage/**',
        '**/node_modules/**',
        '**/__snapshots__/**',
        '**/.*/**',
        '**/*.d.ts',
        '**/*.config.*',
    ],
    rules: {},
}

export const test = {
    coverage: {
        provider: 'v8',
        reporter: ['html', 'text'],
    },
}

export const pack = {
    format: ['esm', 'cjs'],
    dts: true,
    fixedExtension: false,
    sourcemap: false,
    target: 'esnext',
    clean: false,
}

export default { fmt, lint, test, pack }
