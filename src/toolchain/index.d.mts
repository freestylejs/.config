export interface Toolchain {
    config: string
    node: string
    nodeEngine: string
    ciNodes: string[]
    pnpm: string
    pnpmEngine: string
    typescript: string
    tsdown: string
    vitest: string
    coverageV8: string
    vite: string
    oxlint: string
    oxfmt: string
    turbo: string
    changesets: string
    typesNode: string
    attw: string
    publint: string
    husky: string
    lintStaged: string
    rimraf: string
}

export const toolchain: Toolchain
export const toolchainPackages: Record<string, string>
export const toolchainPlaceholders: Record<string, string>

declare const defaults: Toolchain
export default defaults
