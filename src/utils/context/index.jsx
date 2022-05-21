import React, { useState, useEffect, createContext } from 'react';

export const DimensionContext = createContext();

export const DimensionProvider = ({ children }) => {
  const [dimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  const handleWindowResize = () => {
    dimension.width = window.innerWidth;
    dimension.height = window.innerHeight;

    setDimension(dimension);
    console.log(`resize ! screen dimension are now ${dimension.width} x ${dimension.height}`);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });
  return <DimensionContext.Provider value={{ dimension }}>{children}</DimensionContext.Provider>;
};
