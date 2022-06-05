export default {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/node_modules',
    '<rootDir>/cypress/',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  globalSetup: '<rootDir>/tests/globalSetup.ts',
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.ts',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
