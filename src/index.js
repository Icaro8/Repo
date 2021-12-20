import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateGlobalStyle from './GlobalStyles/creatGlobalStyles' ;
import {BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <CreateGlobalStyle/>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

