import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '../..');
const distDir = path.join(rootDir, 'dist');

void describe('dist/main.css integration test', () => {
  let content: string;

  before(() => {
    const filePath = path.join(distDir, 'main.css');
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

  void describe('CSS structure', () => {
    void it('should have :root block', () => {
      assert.ok(content.includes(':root {'));
    });

    void it('should have dark mode media query', () => {
      assert.ok(content.includes('@media (prefers-color-scheme: dark)'));
    });
  });

  void describe('global colors', () => {
    const colorGroups = ['Red', 'Green', 'Blue', 'Yellow', 'Monotone'];
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

    for (const group of colorGroups) {
      void it(`should have ${group} color group comment`, () => {
        assert.ok(content.includes(`/* Global Colors - ${group} */`));
      });

      for (const shade of shades) {
        const varName = `--color-${group.toLowerCase()}-${shade}`;
        void it(`should have ${varName} with oklch value`, () => {
          const regex = new RegExp(`${varName}:\\s*oklch\\([^)]+\\)`);
          assert.ok(regex.test(content), `${varName} should be defined with oklch value`);
        });
      }
    }
  });

  void describe('semantic tokens - light mode', () => {
    void it('should have light mode comment', () => {
      assert.ok(content.includes('/* Semantic Tokens - Light Mode */'));
    });

    void it('should have primary-main token', () => {
      assert.ok(content.includes('--color-primary-main:'));
    });

    void it('should have primary-accent token', () => {
      assert.ok(content.includes('--color-primary-accent:'));
    });

    void it('should have actions-like token', () => {
      assert.ok(content.includes('--color-actions-like:'));
    });

    void it('should have neutral-background token', () => {
      assert.ok(content.includes('--color-neutral-background:'));
    });

    void it('should have neutral-text token', () => {
      assert.ok(content.includes('--color-neutral-text:'));
    });

    void it('should have neutral-subtext token', () => {
      assert.ok(content.includes('--color-neutral-subtext:'));
    });

    void it('should have neutral-border token', () => {
      assert.ok(content.includes('--color-neutral-border:'));
    });

    void it('should have neutral-white as #ffffff', () => {
      assert.ok(content.includes('--color-neutral-white: #ffffff'));
    });

    void it('should have neutral-black as #000000', () => {
      assert.ok(content.includes('--color-neutral-black: #000000'));
    });
  });

  void describe('semantic tokens - dark mode', () => {
    void it('should have dark mode comment inside media query', () => {
      assert.ok(content.includes('/* Semantic Tokens - Dark Mode */'));
    });
  });
});
