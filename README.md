# design-system

Design system for O2 Project

## 🚀 Getting Started

This design system is built with [Storybook](https://storybook.js.org/) and styled with [Tailwind CSS](https://tailwindcss.com/).

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

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

## 🎨 Tech Stack

- **Storybook**: 10.0.5 (React with Vite)
- **React**: 19.2.0
- **Tailwind CSS**: 4.1.16
- **PostCSS**: 8.5.6
- **Autoprefixer**: 10.4.21

## 📦 Component Structure

Components are organized in the `src/components/` directory with their corresponding stories:

```
src/
└── components/
    ├── Card.jsx          # Component implementation
    └── Card.stories.js   # Storybook stories
```

## 🎯 Creating New Components

1. Create your component in `src/components/YourComponent.jsx`
2. Style it using Tailwind CSS utility classes
3. Create a story file `src/components/YourComponent.stories.js`
4. The component will automatically appear in Storybook

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

### Configuration

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `.storybook/tailwind.css` - Tailwind imports

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

ISC
