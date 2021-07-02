import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const logger = ({ dispatch, getState }) => (next) => (action) =>
{
    if (typeof (action) !== 'function')
        console.log('ACTION_TYPE:', action.type);
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));





ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


