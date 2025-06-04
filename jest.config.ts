import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // mostra nomes dos testes no terminal
  verbose: true,

  // Arquivos de teste: unitários no src
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],

  // Ignorar node_modules
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/assets/'],

  // Extensões reconhecidas
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Cobertura de código
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
    '/dist/',
    '/assets/',
  ],
};

export default config;
