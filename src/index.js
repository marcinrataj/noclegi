import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// useState();

function TestHook() {
  return(
    <>
    <h1>Test hook</h1>
    <input type='text'/>
    </>
  )
}

const rootNode = document.getElementById('root');
// ReactDOM.render(<TestHook />, rootNode);
ReactDOM.render(<App />, rootNode);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
