import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import InputField from './src/js/InputField/components/inputField';

const STORE = createStore(()=>{}, applyMiddleware(reduxLogger()));

render (
  <Provider store={STORE}>
    <InputField />
  </Provider>,
  document.getElementById('container')
);
