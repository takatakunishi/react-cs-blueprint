import { Config } from "@jest/types"

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testMatch: ["<rootDir>/tests/**/*.test.ts"],
    testEnvironment: "node",
    collectCoverage: true,
    errorOnDeprecated: true,
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "js",
        "ts"
    ],
    moduleDirectories: [
        "node_modules",
        "src"
    ]
}

export default config