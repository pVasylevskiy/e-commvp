import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Отключаем правила, которые могут конфликтовать с Prettier
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      'object-curly-spacing': 'off',
      'array-bracket-spacing': 'off',
      'space-before-function-paren': 'off',
      'keyword-spacing': 'off',
      'space-infix-ops': 'off',
      'eol-last': 'off',
      'no-trailing-spaces': 'off',
      'no-multiple-empty-lines': 'off',
      'padded-blocks': 'off',
      'comma-spacing': 'off',
      'key-spacing': 'off',
      'brace-style': 'off',
      'arrow-spacing': 'off',
      'space-before-blocks': 'off',
      'object-property-newline': 'off',
      'operator-linebreak': 'off',
      'function-paren-newline': 'off',
      'array-element-newline': 'off',
      'object-curly-newline': 'off',
      'implicit-arrow-linebreak': 'off',
      'function-call-argument-newline': 'off',
      'no-extra-parens': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-irregular-whitespace': 'off',
      'no-unexpected-multiline': 'off',
      'no-multi-spaces': 'off',
      'no-multi-assign': 'off',
      'no-multiple-empty-lines': 'off',
      'no-trailing-spaces': 'off',
      'no-whitespace-before-property': 'off',
      'object-curly-newline': 'off',
      'array-bracket-newline': 'off',
      'array-element-newline': 'off',
      'function-paren-newline': 'off',
      'implicit-arrow-linebreak': 'off',
      'function-call-argument-newline': 'off',
      'no-extra-parens': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-irregular-whitespace': 'off',
      'no-unexpected-multiline': 'off',
      'no-multi-spaces': 'off',
      'no-multi-assign': 'off',
      'no-multiple-empty-lines': 'off',
      'no-trailing-spaces': 'off',
      'no-whitespace-before-property': 'off',
    },
  },
];

export default eslintConfig;
