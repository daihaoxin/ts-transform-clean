const path = require("path");
module.exports = {
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$",
  rootDir: path.resolve(__dirname, '.'),
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};