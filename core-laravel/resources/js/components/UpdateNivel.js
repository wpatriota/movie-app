import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import MyGlobleSetting from './MyGlobleSetting';
import { useParams, useLocation, Outlet } from 'react-router-dom';

class UpdateNivel extends React.Component{
  
    constructor(props) {
      super(props);
      const {id} = useParams();
      this.state = {id:'', nome: '', nivel: '', datanascimento: '',sexo: '',idade: '', hobby: '', };
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
  
      this.handleSubmit = this.handleSubmit.bind(this);
      
  }  
  componentDidMount(){
    axios.get(MyGlobleSetting.url + '/api/api_getNivel/${this.props.params.id}')
    .then(response => {
      this.setState({ nivel: response.data });
      console.log(response.data);
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

  handleSubmit(e){
    e.preventDefault();
    const nivel = {
      nome: this.state.nivel
    }

    let uri = MyGlobleSetting.url + '/api/updateNivel/${this.props.params.id}';
    axios.post(uri, nivel).then((response) => {
      BrowserRouter('/displayNiveis');
    });
  };


    render() {
      return (
      <div>
        <h1>Editar Nivel</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>id:</label>
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
            <br />
            <div className="form-group">
              <button className="btn btn-primary">Salvar</button>
            </div>
        </form>
  </div>
      )
    }
}

export default UpdateNivel;