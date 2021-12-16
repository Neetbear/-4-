import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gundam from './Gundam';
import Archangel from './Archangel';
import reportWebVitals from './reportWebVitals';
import Headercomp from './Headercomp';
import Container from './Container';
import Car from './Car';
import Football from './Football';
import Goal from './Goal';
import Fate from './Fate';

const characters = ['Siro', 'Saber', 'Archer', 'Tosaka', 'Verserker']

ReactDOM.render(
  <React.StrictMode>
    <Gundam />
  </React.StrictMode>,
  document.getElementById('header')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Headercomp newTitle="new title!!!!"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();