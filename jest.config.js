module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
<<<<<<< HEAD
    "^.+\\.(js|mjs)$": "babel-jest",
=======
>>>>>>> 1a4d6f7 (feat: jest 환경 설정, media query 변수 가지고오는 유틸 함수 및 테스트코드 작성)
    "^.+\\.(ts)$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: [
<<<<<<< HEAD
    "<rootDir>/**/**/__tests__/**/*.{spec,test}.{js,mjs}",
    "<rootDir>/**/**/__tests__/**/*.{spec,test}.{ts}",
=======
    "<rootDir>/src/**/__tests__/**/*.{js,ts}",
    "<rootDir>/src/**/*.{spec,test}.{js,ts}",
>>>>>>> 1a4d6f7 (feat: jest 환경 설정, media query 변수 가지고오는 유틸 함수 및 테스트코드 작성)
  ],
};
