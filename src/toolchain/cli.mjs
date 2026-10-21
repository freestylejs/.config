#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { toolchain, toolchainPackages } from './index.mjs'

const args = process.argv.slice(2)
const write = args.includes('--write')
const rootIndex = args.indexOf('--root')
const root = resolve(rootIndex >= 0 ? args[rootIndex + 1] : process.cwd())
const packagePath = join(root, 'package.json')

if (!existsSync(packagePath)) {
    console.error(`package.json not found at ${packagePath}`)
    process.exitCode = 1
} else {
    const pkg = JSON.parse(readFileSync(packagePath, 'utf8'))
    const drift = []
    const changed = []

    for (const [name, version] of Object.entries(toolchainPackages)) {
        const field = [
            'dependencies',
            'devDependencies',
            'optionalDependencies',
        ].find((candidate) => pkg[candidate]?.[name] !== undefined)
        if (!field) continue
        if (pkg[field][name] !== version) {
            drift.push(`${name}: ${pkg[field][name]} -> ${version}`)
            if (write) {
                pkg[field][name] = version
                changed.push(name)
            }
        }
    }

    const expectedPackageManager = `pnpm@${toolchain.pnpm}`
    if (pkg.packageManager !== expectedPackageManager) {
        drift.push(
            `packageManager: ${pkg.packageManager ?? 'missing'} -> ${expectedPackageManager}`
        )
        if (write) {
            pkg.packageManager = expectedPackageManager
            changed.push('packageManager')
        }
    }

    pkg.engines ??= {}
    if (pkg.engines.node !== toolchain.nodeEngine) {
        drift.push(
            `engines.node: ${pkg.engines.node ?? 'missing'} -> ${toolchain.nodeEngine}`
        )
        if (write) {
            pkg.engines.node = toolchain.nodeEngine
            changed.push('engines.node')
        }
    }
    if (pkg.engines.pnpm !== toolchain.pnpmEngine) {
        drift.push(
            `engines.pnpm: ${pkg.engines.pnpm ?? 'missing'} -> ${toolchain.pnpmEngine}`
        )
        if (write) {
            pkg.engines.pnpm = toolchain.pnpmEngine
            changed.push('engines.pnpm')
        }
    }

    const nvmrcPath = join(root, '.nvmrc')
    const currentNvmrc = existsSync(nvmrcPath)
        ? readFileSync(nvmrcPath, 'utf8').trim()
        : undefined
    if (currentNvmrc !== toolchain.node) {
        drift.push(`.nvmrc: ${currentNvmrc ?? 'missing'} -> ${toolchain.node}`)
        if (write) {
            writeFileSync(nvmrcPath, `${toolchain.node}\n`)
            changed.push('.nvmrc')
        }
    }

    const workflowPath = join(root, '.github/workflows/ci.yml')
    if (existsSync(workflowPath)) {
        const lines = readFileSync(workflowPath, 'utf8').split('\n')
        const markerIndex = lines.findIndex((line) =>
            line.includes('# freestyle-toolchain:node-matrix')
        )
        if (markerIndex >= 0) {
            const matrixLine = lines[markerIndex + 1] ?? ''
            const match = matrixLine.match(/^(\s*node:\s*)\[[^\]]*\](\s*)$/)
            if (!match) {
                drift.push(
                    '.github/workflows/ci.yml: node matrix line is malformed'
                )
            } else {
                const expectedMatrix = `${match[1]}[${toolchain.ciNodes.join(', ')}]${match[2]}`
                if (matrixLine !== expectedMatrix) {
                    drift.push(
                        `.github/workflows/ci.yml node matrix: ${matrixLine.trim()} -> ${expectedMatrix.trim()}`
                    )
                    if (write) {
                        lines[markerIndex + 1] = expectedMatrix
                        writeFileSync(workflowPath, lines.join('\n'))
                        changed.push('.github/workflows/ci.yml')
                    }
                }
            }
        }
    }

    if (write) {
        if (changed.length > 0) {
            writeFileSync(packagePath, `${JSON.stringify(pkg, null, 4)}\n`)
            process.stdout.write(
                `updated ${changed.length} toolchain value(s)\n`
            )
        } else {
            process.stdout.write('toolchain versions are synchronized\n')
        }
    } else if (drift.length > 0) {
        process.stderr.write(
            `toolchain drift detected:\n${drift.map((item) => `  - ${item}`).join('\n')}\n`
        )
        process.exitCode = 1
    } else {
        process.stdout.write('toolchain versions are synchronized\n')
    }
}
