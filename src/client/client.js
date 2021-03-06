import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../store/reducers';
import App from './App';

const store = createStore( reducer, window.REDUX_DATA );

//Create store and update the "app" div with content generated by the client
ReactDOM.hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
