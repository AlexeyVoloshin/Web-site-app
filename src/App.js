import React, { Component } from 'react';
import './App.css';
import BigApp from './components/BigApp';
class App extends Component {
  render() {
    return (
      <React.Fragment>
            <h3>Новости</h3>
            <BigApp />
          </React.Fragment>
    );
  }
}

export default App;
