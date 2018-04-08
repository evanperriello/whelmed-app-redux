import React, { Component } from 'react';
import './App.css';

import AppHeader from './Components/AppHeader/AppHeader';
import Main from './Components/Main/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Main/>

      </div>
    );
  }
}

export default App;
