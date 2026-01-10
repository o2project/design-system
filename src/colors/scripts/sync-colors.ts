import * as fs from 'fs';

import { oklchToHex } from './oklch-to-hex.js';

/**
 * Represents a single color entry with name and color values.
 */
interface ColorEntry {
  /** Color name identifier */
  name: string;
  /** OKLCH color value */
  oklch: string;
  /** Hex color value */
  hex: string;
}

/**
 * Represents a group of related colors.
 */
interface ColorGroup {
  /** Name of the color group */
  groupName: string;
  /** Array of color entries in this group */
  colors: ColorEntry[];
}

/**
 * Represents a color token with its type and value.
 */
interface ColorToken {
  /** Token type */
  $type: string;
  /** Token value */
  $value: string;
}

/**
 * Maps color names to their token definitions within a group.
 */
interface ColorGroupData {
  [colorName: string]: ColorToken;
}

/**
 * Maps group names to their color group data.
 */
interface GlobalColorsData {
  [groupName: string]: ColorGroupData;
}

/**
 * Extracts OKLCH color values from README.md and converts them to hex.
 *
 * @param readmePath - Path to the README.md file
 * @returns Array of color groups with extracted colors
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
      // Match table rows like: | Red50  | `oklch(0.95 0.020 25)` | `#fceae8` |
      const match = line.match(/\|\s*(\w+)\s*\|\s*`(oklch\([\d.\s]+\))`\s*\|\s*`(#[0-9a-fA-F]{6})`\s*\|/);

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
 * Updates global-colors.json with converted hex values from color groups.
 *
 * @param jsonPath - Path to the global-colors.json file
 * @param colorGroups - Array of color groups containing hex values
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
 * Updates README.md with converted hex values in the color tables.
 *
 * @param readmePath - Path to the README.md file
 * @param colorGroups - Array of color groups containing hex values
 */
function updateReadmeHex(readmePath: string, colorGroups: ColorGroup[]): void {
  let content = fs.readFileSync(readmePath, 'utf-8');

  for (const group of colorGroups) {
    for (const color of group.colors) {
      // Replace hex value in table rows
      // Match: | Name | `oklch(...)` | `#hexval` |
      const pattern = new RegExp(
        `(\\|\\s*${color.name}\\s*\\|\\s*\`${color.oklch.replace(/[()]/g, '\\$&')}\`\\s*\\|\\s*\`)#[0-9a-fA-F]{6}(\`\\s*\\|)`,
        'g',
      );
      content = content.replace(pattern, `$1${color.hex}$2`);
    }
  }

  fs.writeFileSync(readmePath, content, 'utf-8');
}

export { extractColorsFromReadme, updateGlobalColorsJson, updateReadmeHex };
