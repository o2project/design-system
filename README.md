# design-system

Design system for O2 Project

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

```
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

Tailwind CSS is configured and integrated with Storybook. You can use all Tailwind utility classes in your components.

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
  variant = 'primary' 
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
