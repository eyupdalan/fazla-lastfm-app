const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverageFrom: [
        "./components/**/*.{js,jsx}",
        "./pages/**/*.{js,jsx}",
        "!**/*.stories.{js,jsx}",
        "!**/*.story.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ]

}

module.exports = createJestConfig(customJestConfig)
