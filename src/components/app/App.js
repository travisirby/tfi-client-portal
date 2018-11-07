import React, { Component } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Grid, Button, Row, Col, FormControl, Panel} from 'react-bootstrap';

import './App.css';
import reducers from '../../reducers/reducers';
import DeployServer from './deployServer/DeployServer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <DeployServer />
        </div>
      </Provider>
    );
  }
}

export default App;
