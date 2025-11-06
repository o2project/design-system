import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple Card component styled with Tailwind CSS
 */
export const Card = ({ title, content, variant = 'default' }) => {
  const variantClasses = {
    default: 'bg-white border-gray-200',
    primary: 'bg-blue-50 border-blue-300',
    success: 'bg-green-50 border-green-300',
  };

  return (
    <div className={`border rounded-lg shadow-md p-6 ${variantClasses[variant]}`}>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success']),
};
