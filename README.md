# design-system

Design system for O2 Project.

## 🚀 Getting Started

This design system is built with [Storybook](https://storybook.js.org/) and styled with [Tailwind CSS](https://tailwindcss.com/).

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the Storybook development server:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:15021](http://localhost:15021)

### Build

Build a static version of Storybook:

```bash
npm run build-storybook
```

The static files will be generated in the `storybook-static/` directory.

## 📦 Component Structure

Components are organized in the `src/components/` directory with their stories collocated in the same directory:

```text
src/
└── components/
    ├── Card/
    │   ├── Card.jsx          # Component implementation
    │   └── Card.stories.js   # Storybook stories
    ├── Button/
    │   ├── Button.jsx
    │   ├── Button.stories.js
    │   └── button.css
    └── ...
```

## 🎯 Creating New Components

1. Create a new directory in `src/components/` with your component name
2. Add your component file `YourComponent.jsx` in that directory
3. Style it using Tailwind CSS utility classes (or add a CSS file if needed)
4. Create a story file `YourComponent.stories.js` in the same directory
5. The component will automatically appear in Storybook

### Example Component

```jsx
import React from 'react';

export const Button = ({ label, variant = 'primary' }) => {
  return (
    <button className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
      {label}
    </button>
  );
};
```

### Example Story

```javascript
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  args: {
    label: 'Click me',
    variant: 'primary',
  },
};
```

## 🎨 Tailwind CSS

This design system uses Tailwind CSS v4 with CSS-first configuration. Tailwind is integrated with Storybook, and you can use all Tailwind utility classes in your components. See the [Using Colors](#using-colors) section for how to use the design system's color tokens in your project.

## 🎨 Color System

This design system uses OKLCH color space for perceptually uniform colors.

### Building Colors

To generate color files for different frameworks:

```bash
npm run build
```

This command generates:

- `dist/main.css` - Pure CSS Custom Properties
- `dist/main.tailwind.css` - Tailwind CSS v4 theme
- `dist/panda.config.ts` - Panda CSS configuration

### Using Colors

#### Pure CSS

```css
@import '@o2project/design-system/dist/main.css';

.my-component {
  color: var(--color-primary-main);
  background: var(--color-neutral-background);
}
```

#### Tailwind CSS v4

Tailwind CSS v4 uses CSS-first configuration. Import the design system's color theme in your CSS file:

```css
/* app.css or main.css */
@import 'tailwindcss';
@import '@o2project/design-system/dist/main.tailwind.css';
```

Then use the color classes in your HTML/JSX:

```html
<!-- Global colors -->
<div class="bg-blue-700 text-blue-50">Blue themed component</div>

<!-- Semantic tokens -->
<div class="bg-primary-main text-neutral-background">Primary themed component</div>
```

Available color classes:

- Global colors: `red-*`, `green-*`, `blue-*`, `yellow-*`, `monotone-*` (50-950)
- Semantic tokens: `primary-main`, `primary-accent`, `actions-like`, `neutral-background`, `neutral-text`, `neutral-subtext`, `neutral-border`, `neutral-white`, `neutral-black`

For more details about the color system, see [src/colors/README.md](src/colors/README.md).

#### Panda CSS

```typescript
// panda.config.ts
import { defineConfig } from '@pandacss/dev';
import designSystemColors from '@o2project/design-system/panda.config';

export default defineConfig({
  presets: [designSystemColors],
  // ...
});
```

### Updating Colors

1. Edit OKLCH values in `src/colors/README.md`
2. Run `npm run build`
3. All color files will be automatically updated

For more details, see [src/colors/README.md](src/colors/README.md).

## 📚 Documentation

Storybook automatically generates documentation for your components. Add JSDoc comments to your component props for better documentation:

```jsx
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  /** Button text */
  label,
  /** Visual style variant */
  variant = 'primary',
}) => {
  // ...
};
```

## 🤝 Contributing

1. Create a new component in `src/components/`
2. Add Tailwind CSS classes for styling
3. Create stories to showcase different states
4. Test in Storybook
5. Submit a pull request

## 📄 License

MIT
