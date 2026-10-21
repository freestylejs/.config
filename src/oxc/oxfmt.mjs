/**
 * Shared Oxfmt configuration for freestylejs projects.
 */
export const oxfmtConfig = {
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
        '**/node_modules/**',
        '**/coverage/**',
        '**/.trace/**',
        '**/*.d.ts',
    ],
}

export default oxfmtConfig
