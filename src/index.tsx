import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro';
import Works from './components/Works';
import './style.scss'

ReactDOM.render(
  <React.StrictMode>
      <Intro />
      <Works />
  </React.StrictMode>,
  document.getElementById('root')
);
