import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="App__header">
          <Logo styleName="App__logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p styleName="App__intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
