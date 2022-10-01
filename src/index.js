//Import React Library [SENTAX]
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//render external jsx component
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

//render internal jsx component
const heading=(
  <h1> main js file </h1>
)
//root.render(heading);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
