import { Config } from "@jest/types"
import { pathsToModuleNameMapper } from 'ts-jest'

const config: Config.InitialOptions = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    errorOnDeprecated: true,
    roots: [
        "<rootDir>/src"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "js",
        "ts",
        'json'
    ],
    "modulePaths": ["<rootDir>/src"],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
}

export default config