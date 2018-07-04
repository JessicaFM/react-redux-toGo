import React, { Component } from 'react';
import PropTypes from 'prop-types' 
import { Provider } from 'react-redux'
import configureStore from '../store/store'

import Navbar from './container/Navbar.js'

//routes
import {
  Router,
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

const store = configureStore()  

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Provider store={store}>
            <Navbar>
            </Navbar>
          </Provider>
        </div>
      </div>
    );
  }
}

App.propTypes =  {
  store: PropTypes.object.isRequired
}

export default App;
