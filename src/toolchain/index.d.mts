export interface Toolchain {
    config: string
    node: string
    pnpm: string
    typescript: string
    tsdown: string
    vitest: string
    vite: string
    oxlint: string
    oxfmt: string
    turbo: string
    changesets: string
    typesNode: string
}

export const toolchain: Toolchain

declare const defaults: Toolchain
export default defaults
