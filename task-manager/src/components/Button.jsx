import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant = 'primary', onClick, children }) => {
const base = 'px-4 py-2 rounded font-medium transition-transform duration-200 hover:scale-105';
    const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;
