import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './Car';
import Gundam from './Gundam';
import reportWebVitals from './reportWebVitals';
import Archangel from './Archangel';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam model="Freedom"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Archangel />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Car color="red"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );