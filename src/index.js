import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-bootstrap";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
  , document.getElementById('root')
);

reportWebVitals();
