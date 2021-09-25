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

const actualReducer = (state = [], action) => {
    if (action.type === 'SET_FEELING'){
        console.log('SET_FEELING',action.result)
        return [...state, action.result];
    } else if (action.type === 'SET_UNDERSTANDING'){
        console.log('SET_UNDERSTANDING',action.payload)
        return [...state, action.payload];
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
