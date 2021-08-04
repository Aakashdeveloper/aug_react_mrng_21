import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

/*
var React = require('react');
var ReactDOM = require('react-dom');

function App(){
    return(
        <h1>Hiii To React</h1>
    )
}*/

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hiii To React</h1>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
