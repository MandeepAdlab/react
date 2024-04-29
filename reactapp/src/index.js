import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// const custom = React.createElement(
//   "h1",
//   {
//     href:"test.com"
//   },
//   "this is for tst"
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);


