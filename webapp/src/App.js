import React, { Component } from 'react';
import logo from './logo.svg';
import Todos from './Todos'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Velkommen til workshop med Bredvid</h2>
        </div>
          <Todos />
      </div>
    );
  }
}

export default App;
