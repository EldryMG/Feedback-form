import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//Redux files needed for app to work:

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const testTotal = {}

// Setting state to an empty object, incoming data will be key:value pairs.

const actualReducer = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        console.log('SET_FEELING', action.result)
        state.feeling = action.result;
        return state;
    } else if (action.type === 'SET_UNDERSTANDING') {
        state.understanding =  action.payload;
        return state;
    } else if (action.type === 'SET_SUPPORT') {
        state.support = action.result;
        return state;
    } else if (action.type === 'SET_COMMENTS'){
        state.comment = action.result;
        return state;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        actualReducer,
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
