import React from 'react';

interface CardProps {
  /** Card title */
  title: string;
  /** Card content */
  content: string;
  /** Visual variant of the card */
  variant?: 'default' | 'primary' | 'success';
}

/**
 * A simple Card component styled with Tailwind CSS
 */
export const Card: React.FC<CardProps> = ({ title, content, variant = 'default' }) => {
  const variantClasses: Record<string, string> = {
    default: 'bg-monotone-100 border-monotone-300',
    primary: 'bg-blue-100 border-blue-300',
    success: 'bg-beige-100 border-beige-300',
  };

  return (
    <div className={`border rounded-lg shadow-md p-6 ${variantClasses[variant]}`}>
      <h3 className="text-xl font-bold mb-2 text-monotone-800">{title}</h3>
      <p className="text-monotone-600">{content}</p>
    </div>
  );
};
