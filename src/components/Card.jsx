import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple Card component styled with Tailwind CSS
 */
export const Card = ({ title, content, variant = 'default' }) => {
  const variantClasses = {
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success']),
};
