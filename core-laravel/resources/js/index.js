require('./bootstrap');

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, useParams} from "react-router-dom";

import App from './components/App';
import CreateDesenvolvedor from './components/CreateDesenvolvedor';
import DisplayDesenvolvedor from './components/DisplayDesenvolvedor';
import UpdateDesenvolvedor from './components/UpdateDesenvolvedor';
import DisplayNivel from './components/DisplayNivel';
import CreateNivel from './components/DisplayNivel';

const routes = (
      <Routes>
          <Route path="/" element={<DisplayDesenvolvedor />}></Route>
          <Route path="/CreateDesenvolvedor" element={<CreateDesenvolvedor />}></Route>
          <Route path="/UpdateDesenvolvedor/:id" element={<UpdateDesenvolvedor />}></Route>
          <Route path="/DeleteDesenvolvedor/:id" ></Route>

          <Route path="/DisplayNivel" element={<DisplayNivel />}></Route>
          <Route path="/CreateNivel" element={<CreateNivel/>}></Route>
          
      </Routes>
);

ReactDOM.render((
  <Router>
      {routes}
  </Router>

), document.getElementById('root'));