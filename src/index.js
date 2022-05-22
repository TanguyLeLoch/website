import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate, faCode, faVialCircleCheck, faBook, faBriefcase, faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faUserGraduate, faCode, faVialCircleCheck, faBook, faBriefcase, faArrowRight, faBars, faXmark);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"></link>
    <App />
  </>
);
