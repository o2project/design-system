import { formatHex, oklch } from 'culori';

/**
 * Parses an OKLCH string and converts it to a hex color value.
 *
 * @param oklchString - OKLCH color string (e.g., "oklch(0.97 0 0)")
 * @returns Hex color value (e.g., "#f5f5f5")
 * @throws Error if the OKLCH format is invalid
 *
 * @example
 * ```typescript
 * oklchToHex("oklch(0.97 0 0)") // returns "#f5f5f5"
 * ```
 */
export function oklchToHex(oklchString: string): string {
  const match = oklchString.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/);

  if (!match) {
    throw new Error(`Invalid OKLCH format: ${oklchString}`);
  }

  const [, l, c, h] = match;
  const lightness = parseFloat(l);
  const chroma = parseFloat(c);
  const hue = parseFloat(h);

  const color = oklch({ mode: 'oklch', l: lightness, c: chroma, h: hue });
  const hex = formatHex(color);

  return hex;
}

/**
 * Test cases using Monotone colors from README.md.
 */
export const monotoneTestCases = [
  { oklch: 'oklch(0.97 0 0)', expected: '#f5f5f5', name: 'Monotone50' },
  { oklch: 'oklch(0.90 0 0)', expected: '#dedede', name: 'Monotone100' },
  { oklch: 'oklch(0.83 0 0)', expected: '#c7c7c7', name: 'Monotone200' },
  { oklch: 'oklch(0.75 0 0)', expected: '#aeaeae', name: 'Monotone300' },
  { oklch: 'oklch(0.67 0 0)', expected: '#959595', name: 'Monotone400' },
  { oklch: 'oklch(0.59 0 0)', expected: '#7d7d7d', name: 'Monotone500' },
  { oklch: 'oklch(0.51 0 0)', expected: '#666666', name: 'Monotone600' },
  { oklch: 'oklch(0.43 0 0)', expected: '#505050', name: 'Monotone700' },
  { oklch: 'oklch(0.35 0 0)', expected: '#3a3a3a', name: 'Monotone800' },
  { oklch: 'oklch(0.28 0 0)', expected: '#292929', name: 'Monotone900' },
  { oklch: 'oklch(0.21 0 0)', expected: '#181818', name: 'Monotone950' },
];

/**
 * Runs OKLCH to Hex conversion tests and outputs results to console.
 * Exits with code 1 if any test fails.
 */
export function runTests(): void {
  console.log('Running OKLCH to Hex conversion tests...\n');

  let passed = 0;
  let failed = 0;

  for (const testCase of monotoneTestCases) {
    const result = oklchToHex(testCase.oklch);
    const isMatch = result === testCase.expected;

    if (isMatch) {
      console.log(`✓ ${testCase.name}: ${testCase.oklch} → ${result}`);
      passed++;
    } else {
      console.log(`✗ ${testCase.name}: ${testCase.oklch} → ${result} (expected: ${testCase.expected})`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    process.exit(1);
  }
}

// Run tests if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runTests();
}
