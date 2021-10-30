module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb-typescript/base',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,
        'import/prefer-default-export': 0,
        'import/no-default-export': 2,
      },
    },
  ],
};
