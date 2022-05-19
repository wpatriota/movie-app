import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


class Master extends React.Component {
  render(){
    return (
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
          <div className='App'>
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default Master;