import config from '@kubosho/configs/eslint';
import { defineConfig } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';

export default defineConfig([
  ...config,
  {
    files: ['**/*.stories.ts', '**/*.stories.tsx'],
    extends: [storybook.configs['flat/recommended']],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/.storybook/**/*.ts',
            '**/*.config.*',
            '**/*.test.*',
          ],
        },
      ],
    },
  },
]);
