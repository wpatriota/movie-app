import React, {Component} from 'react';
//import {browserHistory} from "history/createBrowserHistory";
import { BrowserRouter } from "react-router-dom";
import MyGlobleSetting from './MyGlobleSetting';


class CreateNivel extends React.Component{

    constructor(props) {
      super(props);
      this.state = {nivel: ''};
      /*this.state = {
        allQuotes: [],
      };*/
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  
  handleChange1(e){
    this.setState({
      productTitle: e.target.value
    })
    };

  handleSubmit(e){
    e.preventDefault();
    const nivel = {
      title: this.state.nivel
    }
    let uri = MyGlobleSetting.url + '/api/api_createNivel';
    axios.post(uri, nivel).then((response) => {
      browserRouter('/DisplayNivel');
    });
  };


    render() {
      return (
      <div>
        <h1>Create Product</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nivel:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <br />
            <div className="form-group">
              <button className="btn btn-primary">Incluir nível</button>
            </div>
        </form>
  </div>
      )
    }
}

export default CreateNivel;