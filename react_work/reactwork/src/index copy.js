import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// ReactDOM.render(myelement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <h1>
//         Hello {this.props.name}
//       </h1>
//     );
//   }
// }

// const myElement = <h1>I Love React!</h1>; // JSX type
// const myElement = React.createElement('h1', {}, 'Did not use jsx'); //React Element Type
// const myElement = <h1>React is {5 + 5} times better with JSX!</h1>;
// const myElement = (
//   <ul>
//     <li>Apple</li>
//     <li>Google</li>
//     <li>Amazon</li>
//     <li>Facebook</li>
//   </ul>
// );
// const myElement = (
//   <div>
//   <h1>Hello World</h1>
//   <p>I Love React and nodejs!</p>
//   </div>
// );
// const myElement = (
//   <input type='text'/>
// );
// const myElement = <h1 className="myClass">Hello World!</h1>
// const x = 1;
// let txt = "Hello World!";
// if(x < 10) {
//   txt="Hello"
// }

// const myElement = <h1>{txt}</h1>;

// const myElement = <h1>{(x) < 10 ? "Hello" : "Hello World!"}</h1>
// ReactDOM.render(myElement, document.getElementById('root'));

// ReactDOM.render(
//   <HelloMessage name="React" />,
//   document.getElementById('root')