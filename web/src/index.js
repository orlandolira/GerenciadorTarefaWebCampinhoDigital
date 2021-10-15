import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./view/home"



/* imjeta a função que presenta a pagina no doc atrves da div root */


ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
