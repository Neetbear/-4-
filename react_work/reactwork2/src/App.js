import logo from './logo.svg';
import './App.css';
// import InputExam from './InputExam';
import Calculator from './Calculator';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Calculator />
      {/* <h1>Hello World!!!</h1> */}
    </div>
  );
}


export default App;
