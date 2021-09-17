import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/storefile';
import Home from './container/Home';

// view is connected to store
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('root')
)