import type { Config } from 'jest'

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }]
  },
  roots: ['<rootDir>/src']
}

export default config
