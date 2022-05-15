import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate, faCode, faVialCircleCheck, faBook, faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faUserGraduate, faCode, faVialCircleCheck, faBook, faBriefcase, faArrowRight);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
