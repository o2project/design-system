/**
 * Common type definitions for color token generators.
 * @packageDocumentation
 */

/**
 * Represents a single color entry with name and color values.
 */
export interface ColorEntry {
  /** Color name identifier (e.g., "Blue50") */
  name: string;
  /** OKLCH color value (e.g., "oklch(0.97 0.02 250)") */
  oklch: string;
  /** Hex color value (e.g., "#e8f4fc") */
  hex: string;
}

/**
 * Represents a group of related colors.
 */
export interface ColorGroup {
  /** Name of the color group (e.g., "Blue", "Red") */
  groupName: string;
  /** Array of color entries in this group */
  colors: ColorEntry[];
}

/**
 * Represents a semantic token with its resolved values.
 */
export interface SemanticToken {
  /** Full token name (e.g., "Primary.Main") */
  name: string;
  /** Token path as array (e.g., ["Primary", "Main"]) */
  path: string[];
  /** Color mode for this token */
  mode: 'light' | 'dark';
  /** Original value, can be a reference (e.g., "{Blue.Blue700}") or direct hex value */
  value: string;
  /** Resolved OKLCH value from the reference */
  resolvedOklch?: string;
  /** Resolved Hex value from the reference */
  resolvedHex?: string;
}

/**
 * Container for resolved semantic tokens in both light and dark modes.
 */
export interface ResolvedTokens {
  /** Array of semantic tokens for light mode */
  light: SemanticToken[];
  /** Array of semantic tokens for dark mode */
  dark: SemanticToken[];
}
