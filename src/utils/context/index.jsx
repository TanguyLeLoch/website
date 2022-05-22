import React, { useState, useEffect, createContext } from 'react';

export const DimensionContext = createContext();
const breakpoint = 800;
export const DimensionProvider = ({ children }) => {
  const [isUnderBreakpoint, setIsUnderBreakpoint] = useState(window.innerWidth < breakpoint);
  const handleWindowResize = () => {
    setIsUnderBreakpoint(window.innerWidth < breakpoint);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return <DimensionContext.Provider value={{ isUnderBreakpoint }}>{children}</DimensionContext.Provider>;
};
