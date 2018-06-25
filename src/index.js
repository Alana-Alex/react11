import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountChallenge from './CountChallenge';


import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App name="REACT" test="PAGE" />, document.getElementById('root'));
ReactDOM.render(<CountChallenge/> ,document.getElementById('root'));
registerServiceWorker();
