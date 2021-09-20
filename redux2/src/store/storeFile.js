import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducer/mainReducer';

let store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default store;