import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import checkAccessibility from './utils/accessibility';
import '@nt/dds-style'
import { BrowserRouter } from 'react-router-dom';
// require(‘@nt/dds-style‘);
checkAccessibility();

ReactDOM.render(<App />, document.getElementById('app'));
