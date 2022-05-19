import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import MyGlobleSetting from './MyGlobleSetting';
import { useParams, useLocation, Outlet } from 'react-router-dom';

class UpdateNivel extends React.Component{
  
    constructor(props) {
    console.log('constructor');
      super(props);
      console.log(props);
      const {id} = useParams();
      console.log(id);
      this.state = {nome: '', nivel: '', datanascimento: '',sexo: '',idade: '', hobby: '', };
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
      this.handleChange6 = this.handleChange6.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
  }  
  componentDidMount(){
    axios.get(MyGlobleSetting.url + '/api/api_getNivel/${this.state.id}')
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

    let uri = MyGlobleSetting.url + '/api/updateDesenvolvedor';
    axios.post(uri, desenvolvedor).then((response) => {
      BrowserRouter('/displayDesenvolvedores');
    });
  };


    render() {
      return (
      <div>
        <h1>Editar desenvolvedor</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>nome:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>nivel:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>datanascimento:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange3}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Sexo:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange4}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Idade:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange5}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Hobby:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange6}></textarea>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Desenvolvedor</button>
            </div>
        </form>
  </div>
      )
    }
}

export default UpdateNivel;