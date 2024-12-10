import React from 'react';

const Divider = ({ width, color, thickness }) => {
  const dividerStyle = {
    width: width || '100%',
    backgroundColor: color || '#000',
    height: thickness || '2px',
    margin: '20px 0',
  };

  return <div style={dividerStyle}></div>;
};

export default Divider;
