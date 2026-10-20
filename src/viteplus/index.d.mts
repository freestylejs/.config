export interface FmtConfig {
    printWidth: number
    tabWidth: number
    useTabs: boolean
    semi: boolean
    singleQuote: boolean
    trailingComma: 'es5' | 'all' | 'none'
    bracketSpacing: boolean
    bracketSameLine: boolean
    arrowParens: 'always' | 'avoid'
    jsxSingleQuote: boolean
    quoteProps: 'as-needed' | 'consistent' | 'preserve'
    endOfLine: 'lf' | 'crlf' | 'cr'
    sortPackageJson: boolean
    sortImports: boolean
    ignorePatterns: string[]
}

export interface LintConfig {
    categories: Record<string, 'off' | 'warn' | 'error'>
    options: {
        typeAware: boolean
        typeCheck: boolean
    }
    ignorePatterns: string[]
    rules: Record<string, unknown>
}

export interface TestConfig {
    coverage: {
        provider: 'v8' | 'istanbul'
        reporter: string[]
    }
}

export interface PackConfig {
    format: Array<'esm' | 'cjs' | 'iife' | 'umd'>
    dts: boolean
    fixedExtension: boolean
    sourcemap: boolean
    target: string
    clean: boolean
}

export const fmt: FmtConfig
export const lint: LintConfig
export const test: TestConfig
export const pack: PackConfig

declare const defaults: {
    fmt: FmtConfig
    lint: LintConfig
    test: TestConfig
    pack: PackConfig
}

export default defaults
