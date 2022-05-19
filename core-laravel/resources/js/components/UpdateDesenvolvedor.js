import React, {Component} from 'react';
import axios from 'axios';

import { Link, useNavigate, useParams, BrowserRouter } from 'react-router-dom';
//import { withRouter } from "react-router";


import MyGlobleSetting from './MyGlobleSetting';
import CreateDesenvolvedor from './CreateDesenvolvedor';
import DisplayDesenvolvedor from './DisplayDesenvolvedor';

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams()
    return <Component params={params} />
  }
  return ComponentWithRouter
}

class UpdateDesenvolvedor extends React.Component{
    
    constructor(props) {
      super(props);
      this.state={id : "", nome: "", nivel: "", datanascimento: "", sexo: "", hobby: "", idade: "", desenvolvedor: []};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
      this.handleChange6 = this.handleChange6.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/api_getDesenvolvedor/${this.props.params.id}`)
      .then(response => {
        this.setState({ desenvolvedor: response.data });
      })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange1(e){
    this.setState({
      nome: e.target.value
    })
    };

  handleChange2(e){
    this.setState({
      nivel: e.target.value
    });
  };
  handleChange3(e){
    this.setState({
      datanascimento: e.target.value
    });
  };
  handleChange4(e){
    this.setState({
      sexo: e.target.value
    });
  };
  handleChange5(e){
    this.setState({
      idade: e.target.value
    });
  };
  handleChange6(e){
    this.setState({
      hobby: e.target.value
    });
  };
  handleSubmit(e){
    e.preventDefault();
    const desenvolvedor = {
      nome: this.state.nome,
      nivel: this.state.nivel,
      sexo: this.state.sexo,
      hobby: this.state.hobby,
      datanascimento: this.state.datanascimento,
      idade: this.state.idade
    }

    let uri = MyGlobleSetting.url + '/api/api_updateDesenvolvedor';
    axios.post(uri, desenvolvedor).then((response) => {
      BrowserRouter('/displayDesenvolvedores');
    });
  };


    render() {
      const {id} = this.props.params ;
      //this.setState({id: id});
      //console.log('id'+this.state);
      return (
      <div>
        <h1>Editar desenvolvedor</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>nome:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} value={this.state.desenvolvedor.nome}  />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>nivel:</label>
                  <input className="form-control col-md-6" onChange={this.handleChange2} value={this.state.desenvolvedor.nivel}></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>datanascimento:</label>
                  <input className="form-control col-md-6" onChange={this.handleChange3} value={this.state.desenvolvedor.datanascimento}></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Sexo:</label>
                  <input className="form-control col-md-6" onChange={this.handleChange4} value={this.state.desenvolvedor.sexo}></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Idade:</label>
                  <input className="form-control col-md-6" onChange={this.handleChange5} value={this.state.desenvolvedor.idade}></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Hobby:</label>
                  <input className="form-control col-md-6" onChange={this.handleChange6} value={this.state.desenvolvedor.hobby}></input>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Salvar</button>
            </div>
        </form>
  </div>
      )
    }
}

export default withRouter(UpdateDesenvolvedor);
//export default UpdateDesenvolvedor;