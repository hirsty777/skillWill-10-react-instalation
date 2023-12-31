import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './pages/App.js';
import reportWebVitals from './test/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
