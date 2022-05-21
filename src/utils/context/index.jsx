import React, { useState, useEffect, createContext } from 'react';

export const WidthContext = createContext();

export const WidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    console.log(`resize ! Width is now ${window.innerWidth}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return <WidthContext.Provider value={{ width }}>{children}</WidthContext.Provider>;
};
