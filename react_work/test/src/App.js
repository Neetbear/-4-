import React, { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import Signup from './components/Signup';
import Signin from './components/Signin';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => this.setState({title: data.title}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Signup/>
          <Signin/>
        </header>
      </div>
    );
  }
};
export default App;
