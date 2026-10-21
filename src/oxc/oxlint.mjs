/**
 * Shared Oxlint configuration for freestylejs projects.
 *
 * Project-specific overrides belong in the consuming repository.
 */
export const oxlintConfig = {
    categories: {
        correctness: 'error',
        suspicious: 'warn',
    },
    plugins: ['typescript', 'import', 'unicorn', 'oxc', 'vitest'],
    ignorePatterns: [
        '**/dist/**',
        '**/node_modules/**',
        '**/coverage/**',
        '**/.trace/**',
        '**/*.d.ts',
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        eqeqeq: 'error',
    },
    overrides: [],
}

export default oxlintConfig
