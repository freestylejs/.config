import { readFileSync } from 'node:fs'
import { oxfmtConfig } from '../src/oxc/oxfmt.mjs'
import { oxlintConfig } from '../src/oxc/oxlint.mjs'
import {
    toolchain,
    toolchainPackages,
    toolchainPlaceholders,
} from '../src/toolchain/index.mjs'

const pkg = JSON.parse(
    readFileSync(new URL('../package.json', import.meta.url), 'utf8')
)

if (pkg.version !== toolchain.config) {
    throw new Error(
        `package version ${pkg.version} does not match toolchain.config ${toolchain.config}`
    )
}
if (!oxlintConfig.plugins.includes('typescript')) {
    throw new Error('oxlint config is missing the TypeScript plugin')
}
if (oxfmtConfig.printWidth !== 80) {
    throw new Error('oxfmt config is missing the expected print width')
}
if (!pkg.bin?.['freestyle-sync-toolchain']) {
    throw new Error('missing freestyle-sync-toolchain bin')
}
if (!toolchain.ciNodes.length) {
    throw new Error('toolchain.ciNodes must not be empty')
}
if (toolchainPackages['@freestylejs/config'] !== pkg.version) {
    throw new Error('toolchainPackages config version does not match package')
}
if (toolchainPlaceholders.__VERSION_CONFIG__ !== pkg.version) {
    throw new Error(
        'toolchain placeholder config version does not match package'
    )
}
for (const entry of ['./oxlint', './oxfmt', './toolchain', './tsconfig-ts7']) {
    if (!pkg.exports[entry]) throw new Error(`missing export ${entry}`)
}

process.stdout.write('config contract verification passed\n')
