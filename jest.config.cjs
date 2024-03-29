module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less|scss)$": "identity-obj-proxy",
    // testMatch: ["**/__test__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  },
};
