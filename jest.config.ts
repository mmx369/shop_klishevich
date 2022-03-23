export default {
  testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  globalSetup: '<rootDir>/tests/globalSetup.js',
  moduleNameMapper: {
    // '^.+\\.(styl|css|scss)': 'identity-obj-proxy',
    // '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    // '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
    // '^.+\\.(styl|css|scss)': 'identity-obj-proxy',
  },
}
