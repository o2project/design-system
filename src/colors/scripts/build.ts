import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import { generateCSSVariables } from './generators/css-vars.js';
import { generatePandaConfig } from './generators/panda.js';
import { generateTailwindTheme } from './generators/tailwind.js';
import { extractColorsFromReadme, updateGlobalColorsJson, updateReadmeHex } from './sync-colors.js';
import { resolveSemanticTokens } from './utils/color-resolver.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Main build function that generates all color output files.
 *
 * This function performs the following steps:
 * 1. Extracts OKLCH values from README.md and converts them to hex
 * 2. Updates global-colors.json with converted hex values
 * 3. Resolves semantic tokens for light and dark modes
 * 4. Generates framework-specific output files (CSS, Tailwind, Panda)
 */
function build(): void {
  // Define paths
  const colorsDir = path.join(__dirname, '..');
  const rootDir = path.join(__dirname, '../../..');

  const readmePath = path.join(colorsDir, 'README.md');
  const jsonPath = path.join(colorsDir, 'global-colors.json');
  const lightModeJsonPath = path.join(colorsDir, 'light-mode-colors.json');
  const darkModeJsonPath = path.join(colorsDir, 'dark-mode-colors.json');

  const distDir = path.join(rootDir, 'dist');
  const mainCssPath = path.join(distDir, 'main.css');
  const tailwindCssPath = path.join(distDir, 'main.tailwind.css');
  const pandaConfigPath = path.join(distDir, 'panda.config.ts');

  // Create dist directory if it doesn't exist
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Step 1: README → global-colors.json (Hex)
  console.log('Reading OKLCH values from README.md...');
  const colorGroups = extractColorsFromReadme(readmePath);

  let totalColors = 0;
  for (const group of colorGroups) {
    console.log(`  ${group.groupName}: ${group.colors.length} colors`);
    totalColors += group.colors.length;
  }
  console.log(`\nTotal colors extracted: ${totalColors}`);

  console.log('\nUpdating global-colors.json...');
  updateGlobalColorsJson(jsonPath, colorGroups);
  console.log('✓ global-colors.json updated');

  console.log('\nUpdating README.md hex values...');
  updateReadmeHex(readmePath, colorGroups);
  console.log('✓ README.md updated');

  // Step 2: Resolve semantic tokens
  console.log('\nResolving semantic tokens...');
  const lightTokens = resolveSemanticTokens(lightModeJsonPath, colorGroups, 'light');
  const darkTokens = resolveSemanticTokens(darkModeJsonPath, colorGroups, 'dark');
  console.log(`  Light mode tokens: ${lightTokens.length}`);
  console.log(`  Dark mode tokens: ${darkTokens.length}`);

  // Step 3: Generate framework-specific files
  console.log('\nGenerating framework-specific files...');

  generateCSSVariables(mainCssPath, colorGroups, lightTokens, darkTokens);
  console.log('✓ main.css generated');

  generateTailwindTheme(tailwindCssPath, colorGroups, lightTokens, darkTokens);
  console.log('✓ main.tailwind.css generated');

  generatePandaConfig(pandaConfigPath, colorGroups, lightTokens, darkTokens);
  console.log('✓ panda.config.ts generated');

  console.log('\n✓ Build completed successfully!');
}

// Run build if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  build();
}

export { build };
