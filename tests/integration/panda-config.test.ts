import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '../..');
const distDir = path.join(rootDir, 'dist');

void describe('dist/panda.config.ts integration test', () => {
  let content: string;

  before(() => {
    const filePath = path.join(distDir, 'panda.config.ts');
    content = readFileSync(filePath, 'utf-8');
  });

  void describe('header comments', () => {
    void it('should contain DO NOT EDIT MANUALLY warning', () => {
      assert.ok(content.includes('DO NOT EDIT MANUALLY'));
    });

    void it('should contain build command reference', () => {
      assert.ok(content.includes('npm run build'));
    });
  });

  void describe('imports and exports', () => {
    void it('should import defineConfig from @pandacss/dev', () => {
      assert.ok(content.includes("import { defineConfig } from '@pandacss/dev'"));
    });

    void it('should export default defineConfig', () => {
      assert.ok(content.includes('export default defineConfig({'));
    });
  });

  void describe('config structure', () => {
    void it('should have theme.extend.tokens.colors structure', () => {
      assert.ok(content.includes('theme: {'));
      assert.ok(content.includes('extend: {'));
      assert.ok(content.includes('tokens: {'));
      assert.ok(content.includes('colors: {'));
    });
  });

  void describe('global colors', () => {
    const colorGroups = ['red', 'green', 'blue', 'yellow', 'monotone'];
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

    for (const group of colorGroups) {
      void it(`should have ${group} color group`, () => {
        assert.ok(content.includes(`${group}: {`));
      });

      for (const shade of shades) {
        void it(`should have ${group}.${shade} with oklch value`, () => {
          const regex = new RegExp(`${shade}:\\s*\\{\\s*value:\\s*'oklch\\([^)]+\\)'\\s*\\}`);
          assert.ok(regex.test(content), `${group}.${shade} should be defined with oklch value`);
        });
      }
    }
  });

  void describe('semantic tokens structure', () => {
    void it('should have primary.main with base and _dark values', () => {
      assert.ok(content.includes('primary: {'));
      assert.ok(content.includes('main: {'));
      assert.ok(content.includes('value: {'));
      assert.ok(content.includes('base:'));
      assert.ok(content.includes('_dark:'));
    });

    void it('should have primary.accent token', () => {
      assert.ok(content.includes('accent: {'));
    });

    void it('should have actions.like token', () => {
      assert.ok(content.includes('actions: {'));
      assert.ok(content.includes('like: {'));
    });

    void it('should have neutral tokens', () => {
      assert.ok(content.includes('neutral: {'));
      assert.ok(content.includes('background: {'));
      assert.ok(content.includes('text: {'));
      assert.ok(content.includes('subtext: {'));
      assert.ok(content.includes('border: {'));
      assert.ok(content.includes('white: {'));
      assert.ok(content.includes('black: {'));
    });
  });

  void describe('semantic token values', () => {
    void it('should have neutral.white with #ffffff value', () => {
      assert.ok(content.includes("base: '#ffffff'"));
    });

    void it('should have neutral.black with #000000 value', () => {
      assert.ok(content.includes("base: '#000000'"));
    });
  });
});
