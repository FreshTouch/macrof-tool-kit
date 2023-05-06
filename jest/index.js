module.exports = {
  verbose: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  setupFiles: [
    "<rootDir>/setupTests.ts"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/lib/",
    "<rootDir>/build/"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  modulePathIgnorePatterns: [
    "src/cypress/*"
  ],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "identity-obj-proxy",
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ]
};
