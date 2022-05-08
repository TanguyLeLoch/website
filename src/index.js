import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import GridTest from './pages/GridTest';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate, faCode, faVialCircleCheck, faBook, faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add(faUserGraduate, faCode, faVialCircleCheck, faBook, faBriefcase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home nbColumns={2} />
    <GridTest />
  </React.StrictMode>
);
