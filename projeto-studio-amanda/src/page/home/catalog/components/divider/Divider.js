import React from 'react';

const Divider = ({ width, color, thickness, margin }) => {
  const dividerStyle = {
    width: width || '100%',
    backgroundColor: color || '#000',
    height: thickness || '2px',
    margin: margin || '20px 0',
  };

  return <div style={dividerStyle}></div>;
};

export default Divider;
