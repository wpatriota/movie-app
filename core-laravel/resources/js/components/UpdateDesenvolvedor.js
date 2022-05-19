import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import MyGlobleSetting from './MyGlobleSetting';
import { useParams } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';

class UpdateDesenvolvedor extends React.Component{
  
    constructor(props) {
      super(props);

      this.state = {id: ''};

      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
      this.handleChange6 = this.handleChange6.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  componentDidMount(){
    if(this.props?.match?.params?.id){
      let id = this.props.match.params.id
      console.log('entrou params');
      
      axios.get(MyGlobleSetting.url + `/api/api_getDesenvolvedor/${id}`)
      .then(response => {
        this.setState({ desenvolvedor: response.data });
        console.log(this.state);
      })
    .catch(function (error) {
      console.log(error);
    })
    }else{
      console.log('nao tem id params');
      if(this.props?.match?.obj?.id){
        let id = this.props.match.params.id
        console.log('entrou obj');
        
        axios.get(MyGlobleSetting.url + `/api/api_getDesenvolvedor/${id}`)
        .then(response => {
          this.setState({ desenvolvedor: response.data });
          console.log(this.state);
        })
      .catch(function (error) {
        console.log(error);
      })
      }else{
        console.log('nao tem id obj');
      }

      //let uri = MyGlobleSetting.url + `/api/desenvolvedores/${this.props.obj.id}`;
      //console.log(uri);
    }
  }
  
  pegaId(){
    if(this.props?.match?.params?.id){
      let id = this.props.match.params.id

      this.setState({ id: id });
      console.log(this.state);
    }else{
      console.log('nao tem id params');
      if(this.props?.match?.obj?.id){
        let id = this.props.match.params.id

        this.setState({ id: id });
        console.log(this.state);
      }else{
        console.log('nao tem id obj');
      }
    }
    
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
      //const desenvolvedor = this.props.desenvolvedor;
      this.pegaId();
      return (
      <div>
        <h1>Editar desenvolvedor</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>nome:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} value={this.state} />
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

export default UpdateDesenvolvedor;