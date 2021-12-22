import logo from './logo.svg';
import './App.css';
// import InputExam from './InputExam';
// import UserList from './UserList';
// import UserManage from './UserManage';
// import Box from './Box';
// import ReactCss from './ReactCss';
import CircleDiv from './CircleDiv';

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
    <>
      <div className="App">
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* <h1>Hello World!!!</h1> */}
      </div>
      <div>
        <CircleDiv color='grey'>바보</CircleDiv>
      </div>
    </>
  );
}


export default App;
