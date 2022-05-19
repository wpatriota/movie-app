require('./bootstrap');

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Switch, useParams} from "react-router-dom";

import Master from './components/Master';
import CreateDesenvolvedor from './components/CreateDesenvolvedor';
import DisplayDesenvolvedor from './components/DisplayDesenvolvedor';
import UpdateDesenvolvedor from './components/UpdateDesenvolvedor';
import DisplayNivel from './components/DisplayNivel';
import CreateNivel from './components/DisplayNivel';

const routes = (
      <Routes>
          <Route path="/" element={<DisplayDesenvolvedor />}/>
          <Route path="/CreateDesenvolvedor" element={<CreateDesenvolvedor />}/>
          <Route path="/UpdateDesenvolvedor/:id" element={<UpdateDesenvolvedor />}/>
          <Route path="/DeleteDesenvolvedor/:id" />

          <Route path="/DisplayNivel" element={<DisplayNivel />}/>
          <Route path="/CreateNivel" element={<CreateNivel/>}/>
          
      </Routes>
);

ReactDOM.render((
  <Router>
      {routes}
  </Router>

), document.getElementById('root'));