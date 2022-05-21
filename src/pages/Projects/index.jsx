import React from 'react';
import { useContext, useEffect, useRef } from 'react';

function Projects() {
  console.log('My projects');
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
  //   return <h2>Here a list of my projects</h2>;
}

export default Projects;

const themes = {
  light: {
    foreground: '#000000',
    background: 'red',
  },
  dark: {
    foreground: '#ffffff',
    background: 'blue',
  },
};

const ThemeContext = React.createContext(themes.light);

function App() {}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>;
}
