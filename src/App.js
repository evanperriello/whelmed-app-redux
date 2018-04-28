import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './App.css';

import AppHeader from './Components/AppHeader/AppHeader';
import Main from './Components/Main/Main';

const store = createStore(rootReducer, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppHeader/>
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
