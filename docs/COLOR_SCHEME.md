# O2 Project Design System - Color Scheme

This document defines the color schemes used in the O2 Project design system.

## Base Color Palette

The design system includes four base color palettes, each with 8 shades (100-800):

### Blue
Primary brand color with 8 shades from light to dark.

- `blue-100`: #0086ed
- `blue-200`: #0076d1
- `blue-300`: #0067b5
- `blue-400`: #005799
- `blue-500`: #00477d
- `blue-600`: #003760
- `blue-700`: #002745
- `blue-800`: #001729

### Beige
Neutral warm tone with 8 shades.

- `beige-100`: #ebe8ce
- `beige-200`: #d1cfb8
- `beige-300`: #b8b5a2
- `beige-400`: #9e9c8b
- `beige-500`: #858475
- `beige-600`: #69675c
- `beige-700`: #4a4940
- `beige-800`: #2b2b27

### Yellow
Accent color with 8 shades.

- `yellow-100`: #f0e800
- `yellow-200`: #d4cd00
- `yellow-300`: #b8b100
- `yellow-400`: #9c9600
- `yellow-500`: #807b00
- `yellow-600`: #636000
- `yellow-700`: #474500
- `yellow-800`: #2b2a00

### Monotone
Grayscale palette with 8 shades.

- `monotone-100`: #fafafa
- `monotone-200`: #d6d6d6
- `monotone-300`: #bababa
- `monotone-400`: #9e9e9e
- `monotone-500`: #828282
- `monotone-600`: #636363
- `monotone-700`: #474747
- `monotone-800`: #1a1a1a

## Semantic Color Tokens

Semantic tokens provide meaning and intent to colors, making it easier to maintain consistency across the design system.

### Primary Colors

Colors used for primary brand elements and key UI components.

- **main**: `blue-600` (#003760) - Primary brand color for main CTAs and important elements
- **sub**: `beige-500` (#858475) - Secondary color for supporting elements
- **accent**: `yellow-200` (#d4cd00) - Accent color for highlights and emphasis

### Neutral Colors

Colors used for backgrounds, text, and borders.

- **background**: `monotone-100` (#fafafa) - Default background color
- **text-main**: `monotone-800` (#1a1a1a) - Primary text color for headings and body text
- **text-sub**: `monotone-600` (#636363) - Secondary text color for less prominent text
- **link**: `blue-200` (#0076d1) - Color for links and interactive text
- **border**: `monotone-400` (#9e9e9e) - Default border color for components

## Usage in Tailwind CSS

You can use these colors in your components with Tailwind's utility classes:

### Base Colors
```jsx
<div className="bg-blue-600 text-white">Primary Button</div>
<p className="text-monotone-800">Main text content</p>
```

### Semantic Tokens
```jsx
<div className="bg-primary-main text-white">Primary Button</div>
<p className="text-neutral-text-main">Main text content</p>
<a className="text-neutral-link">Link text</a>
<div className="border border-neutral-border">Card component</div>
```

## TypeScript Usage

When using TypeScript with Tailwind, these colors are available in your components:

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary' }) => {
  const baseClasses = variant === 'primary' 
    ? 'bg-primary-main text-white'
    : 'bg-neutral-background text-neutral-text-main border border-neutral-border';
  
  return <button className={baseClasses}>Click me</button>;
};
```

## Best Practices

1. **Use semantic tokens** whenever possible instead of base colors for better maintainability
2. **Primary colors** should be used for CTAs and important interactive elements
3. **Neutral colors** should be used for text, backgrounds, and borders
4. **Maintain contrast ratios** for accessibility (WCAG AA minimum 4.5:1 for normal text)
5. **Test colors** in both light and dark contexts to ensure readability
