import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Routes , HashRouter} from "react-router-dom";

import CreateDesenvolvedor from './CreateDesenvolvedor';
import DisplayDesenvolvedor from './DisplayDesenvolvedor';
import UpdateDesenvolvedor from './UpdateDesenvolvedor';

import DisplayNivel from './DisplayNivel';
import CreateNivel from './DisplayNivel';
import UpdateNivel from './UpdateNivel';

const routes = (
  <Routes>
      <Route exact path="/" element={<DisplayDesenvolvedor />}/>
      
      <Route path="/CreateDesenvolvedor" element={<CreateDesenvolvedor />}/>
      <Route path="/UpdateDesenvolvedor/:id" element={<UpdateDesenvolvedor />}></Route>
      <Route path="/DeleteDesenvolvedor/:id" />

      <Route path="/DisplayNivel" element={<DisplayNivel />}/>
      <Route path="/UpdateNivel/:id" element={<UpdateNivel />}/>
      <Route path="/CreateNivel" element={<CreateNivel/>}/>
      
  </Routes>
);

class Master extends React.Component {
  render(){
    return (
      <HashRouter>
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://gazintech.com">GAZIN TECH</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="CreateDesenvolvedor">Incluir Desenvolvedor</Link></li>
              <li><Link to="DisplayDesenvolvedor">Desenvolvedores</Link></li>
            </ul>
          </div>
      </nav>
          <div className="content">
              {routes}
              {this.props.children}
          </div>
      </div>
      </HashRouter>
    );
  }
}

export default Master;