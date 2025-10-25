import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
