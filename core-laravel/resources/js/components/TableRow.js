import React, { Component } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MyGlobleSetting from './MyGlobleSetting';


class TableRow extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/api_deleteDesenvolvedor/${this.props.params.id}`;
    axios.delete(uri);
  }

  render() {
    //const desenvolvedor = this.props.desenvolvedor;
    return (
        <tr>
          <td>
            {this.props.desenvolvedor.id}
          </td>
          <td>
            {this.props.desenvolvedor.nome}
          </td>
          <td>
            {this.props.desenvolvedor.nivel}
          </td>
          <td>
            {this.props.desenvolvedor.sexo}
          </td>
          <td>
            {this.props.desenvolvedor.datanascimento}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"/updateDesenvolvedor/"+this.props.desenvolvedor.id} className="btn btn-primary">Editar</Link>
            <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow;
