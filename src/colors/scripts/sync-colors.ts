import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import { oklchToHex } from './oklch-to-hex.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ColorEntry {
  name: string;
  oklch: string;
  hex: string;
}

interface ColorGroup {
  groupName: string;
  colors: ColorEntry[];
}

interface ColorToken {
  $type: string;
  $value: string;
}

interface ColorGroupData {
  [colorName: string]: ColorToken;
}

interface GlobalColorsData {
  [groupName: string]: ColorGroupData;
}

/**
 * Extract OKLCH values from README.md
 */
function extractColorsFromReadme(readmePath: string): ColorGroup[] {
  const content = fs.readFileSync(readmePath, 'utf-8');
  const groups: ColorGroup[] = [];

  const colorSections = [
    { header: '### Red', groupName: 'Red' },
    { header: '### Green', groupName: 'Green' },
    { header: '### Blue', groupName: 'Blue' },
    { header: '### Yellow', groupName: 'Yellow' },
    { header: '### Monotone', groupName: 'Monotone' },
  ];

  for (const section of colorSections) {
    const sectionStart = content.indexOf(section.header);
    if (sectionStart === -1) continue;

    const nextSectionStart = content.indexOf('\n### ', sectionStart + 1);
    const sectionContent =
      nextSectionStart === -1 ? content.slice(sectionStart) : content.slice(sectionStart, nextSectionStart);

    const colors: ColorEntry[] = [];
    const lines = sectionContent.split('\n');

    for (const line of lines) {
      // Match table rows like: | Red50  | oklch(0.95 0.020 25) | #fceae8 |
      const match = line.match(/\|\s*(\w+)\s*\|\s*(oklch\([\d.\s]+\))\s*\|\s*(#[0-9a-fA-F]{6})\s*\|/);

      if (match) {
        const [, name, oklch] = match;
        const hex = oklchToHex(oklch);
        colors.push({ name, oklch, hex });
      }
    }

    if (colors.length > 0) {
      groups.push({ groupName: section.groupName, colors });
    }
  }

  return groups;
}

/**
 * Update global-colors.json with converted hex values
 */
function updateGlobalColorsJson(jsonPath: string, colorGroups: ColorGroup[]): void {
  const content = fs.readFileSync(jsonPath, 'utf-8');
  const data = JSON.parse(content) as GlobalColorsData;

  for (const group of colorGroups) {
    const groupData = data[group.groupName];
    if (groupData) {
      for (const color of group.colors) {
        const colorToken = groupData[color.name];
        if (colorToken) {
          colorToken.$value = color.hex;
        }
      }
    }
  }

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

/**
 * Update README.md with converted hex values
 */
function updateReadmeHex(readmePath: string, colorGroups: ColorGroup[]): void {
  let content = fs.readFileSync(readmePath, 'utf-8');

  for (const group of colorGroups) {
    for (const color of group.colors) {
      // Replace hex value in table rows
      // Match: | Name | oklch(...) | #hexval |
      const pattern = new RegExp(
        `(\\|\\s*${color.name}\\s*\\|\\s*${color.oklch.replace(/[()]/g, '\\$&')}\\s*\\|\\s*)#[0-9a-fA-F]{6}(\\s*\\|)`,
        'g',
      );
      content = content.replace(pattern, `$1${color.hex}$2`);
    }
  }

  fs.writeFileSync(readmePath, content, 'utf-8');
}

/**
 * Main function to sync colors
 */
function syncColors(): void {
  const readmePath = path.join(__dirname, 'README.md');
  const jsonPath = path.join(__dirname, 'global-colors.json');

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

  console.log('\n✓ Color sync completed successfully!');
}

// Run sync if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  syncColors();
}

export { extractColorsFromReadme, syncColors };
