/**
 * Toolchain versions and shared version-derived values.
 *
 * This module is the single authority for versions used by the reference
 * repository, the generator, and generated projects.
 */
export const toolchain = {
    config: '1.5.0',
    node: '24.19.0',
    nodeEngine: '^22.18.0 || ^24.11.0 || >=26.0.0',
    ciNodes: ['22.18.0', '24.19.0'],
    pnpm: '10.20.0',
    pnpmEngine: '>=10.20.0',
    typescript: '7.0.2',
    tsdown: '0.23.1',
    vitest: '5.0.5',
    coverageV8: '5.0.5',
    vite: '8.3.4',
    oxlint: '1.88.0',
    oxfmt: '0.73.0',
    turbo: '2.6.0',
    changesets: '2.29.7',
    typesNode: '24.10.0',
    attw: '0.18.5',
    publint: '0.3.25',
    husky: '9.1.7',
    lintStaged: '16.2.6',
    rimraf: '6.1.0',
}

export const toolchainPackages = {
    '@arethetypeswrong/cli': toolchain.attw,
    '@changesets/cli': toolchain.changesets,
    '@freestylejs/config': toolchain.config,
    '@types/node': toolchain.typesNode,
    '@vitest/coverage-v8': toolchain.coverageV8,
    husky: toolchain.husky,
    'lint-staged': toolchain.lintStaged,
    oxfmt: toolchain.oxfmt,
    oxlint: toolchain.oxlint,
    publint: toolchain.publint,
    rimraf: toolchain.rimraf,
    tsdown: toolchain.tsdown,
    turbo: toolchain.turbo,
    typescript: toolchain.typescript,
    vite: toolchain.vite,
    vitest: toolchain.vitest,
}

export const toolchainPlaceholders = {
    __VERSION_CONFIG__: toolchain.config,
    __VERSION_NODE__: toolchain.node,
    __NODE_ENGINE_RANGE__: toolchain.nodeEngine,
    __CI_NODE_VERSIONS__: toolchain.ciNodes.join(', '),
    __VERSION_PNPM__: toolchain.pnpm,
    __PNPM_ENGINE_RANGE__: toolchain.pnpmEngine,
    __VERSION_TYPESCRIPT__: toolchain.typescript,
    __VERSION_TSDOWN__: toolchain.tsdown,
    __VERSION_VITEST__: toolchain.vitest,
    __VERSION_COVERAGE_V8__: toolchain.coverageV8,
    __VERSION_VITE__: toolchain.vite,
    __VERSION_OXLINT__: toolchain.oxlint,
    __VERSION_OXFMT__: toolchain.oxfmt,
    __VERSION_TURBO__: toolchain.turbo,
    __VERSION_CHANGESETS__: toolchain.changesets,
    __VERSION_TYPES_NODE__: toolchain.typesNode,
    __VERSION_ATTW__: toolchain.attw,
    __VERSION_PUBLINT__: toolchain.publint,
    __VERSION_HUSKY__: toolchain.husky,
    __VERSION_LINT_STAGED__: toolchain.lintStaged,
    __VERSION_RIMRAF__: toolchain.rimraf,
}

export default toolchain
