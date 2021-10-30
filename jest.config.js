/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "src",
  collectCoverage: true,
  coverageDirectory: '../coverage',
  preset: 'ts-jest',
  testEnvironment: 'node'
};
