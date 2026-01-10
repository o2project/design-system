import * as fs from 'fs';

import type { ColorEntry, ColorGroup, SemanticToken } from '../generators/types.js';

/**
 * Represents a color token with its type and value.
 */
interface ColorToken {
  /** Token type (e.g., "color") */
  $type: string;
  /** Token value, either a reference or direct hex value */
  $value: string;
}

/**
 * Maps token names to their color token definitions within a category.
 */
interface ColorCategoryData {
  [tokenName: string]: ColorToken;
}

/**
 * Maps category names to their color token data.
 */
interface SemanticColorsData {
  [category: string]: ColorCategoryData;
}

/**
 * Resolves semantic token references to actual OKLCH/Hex values.
 *
 * @param semanticJsonPath - Path to the semantic colors JSON file
 * @param colorGroups - Array of color groups containing resolved color values
 * @param mode - Color mode ('light' or 'dark')
 * @returns Array of semantic tokens with resolved values
 */
export function resolveSemanticTokens(
  semanticJsonPath: string,
  colorGroups: ColorGroup[],
  mode: 'light' | 'dark',
): SemanticToken[] {
  const content = fs.readFileSync(semanticJsonPath, 'utf-8');
  const semanticData = JSON.parse(content) as SemanticColorsData;

  // Create a map of global colors for quick lookup
  const colorMap = new Map<string, ColorEntry>();
  for (const group of colorGroups) {
    for (const color of group.colors) {
      const key = `${group.groupName}.${color.name}`;
      colorMap.set(key, color);
    }
  }

  // Recursively traverse semantic tokens and resolve references
  const tokens: SemanticToken[] = [];

  for (const [category, categoryData] of Object.entries(semanticData)) {
    for (const [tokenName, tokenData] of Object.entries(categoryData)) {
      const path = [category, tokenName];
      const name = `${category}.${tokenName}`;
      const value = tokenData.$value;

      const resolved = resolveValue(value, colorMap);

      tokens.push({
        name,
        path,
        mode,
        value,
        resolvedOklch: resolved?.oklch,
        resolvedHex: resolved?.hex,
      });
    }
  }

  return tokens;
}

/**
 * Resolves a single token value to its OKLCH and Hex representations.
 *
 * @param value - The token value to resolve (reference like "\{Blue.Blue700\}" or direct hex)
 * @param colorMap - Map of color references to their ColorEntry values
 * @returns Object containing resolved oklch and hex values, or null if unresolvable
 */
function resolveValue(value: string, colorMap: Map<string, ColorEntry>): { oklch: string; hex: string } | null {
  // Check if it's a reference like "{Blue.Blue700}"
  if (value.startsWith('{') && value.endsWith('}')) {
    const ref = value.slice(1, -1); // Remove { and }
    const colorEntry = colorMap.get(ref);

    if (colorEntry) {
      return {
        oklch: colorEntry.oklch,
        hex: colorEntry.hex,
      };
    }

    console.warn(`Warning: Unresolved color reference: ${value}`);
    return null;
  }

  // Direct value like "#ffffff" or "#000000"
  // For direct hex values, we don't have OKLCH, so return as-is
  if (value.startsWith('#')) {
    return {
      oklch: '', // No OKLCH available for direct values
      hex: value,
    };
  }

  console.warn(`Warning: Unknown color value format: ${value}`);
  return null;
}
