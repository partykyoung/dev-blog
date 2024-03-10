module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|mjs)$": "babel-jest",
    "^.+\\.(ts)$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: [
    "<rootDir>/**/**/__tests__/**/*.{spec,test}.{js,mjs}",
    "<rootDir>/**/**/__tests__/**/*.{spec,test}.{ts}",
  ],
};