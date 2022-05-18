import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyGlobleSetting from './MyGlobleSetting';


class TableRow extends Component {
  constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/desenvolvedores/${this.props.obj.id}`;
    const history = useNavigate();

    axios.delete(uri);
      history('/display-item');
  }
  render() {
    const desenvolvedor = this.props.desenvolvedor;
    return (
        <tr>
          <td>
            {desenvolvedor.id}
          </td>
          <td>
            {desenvolvedor.nome}
          </td>
          <td>
            {desenvolvedor.nivel}
          </td>
          <td>
            {desenvolvedor.sexo}
          </td>
          <td>
            {desenvolvedor.datanascimento}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"updateDesenvolvedor/"+desenvolvedor.id} className="btn btn-primary">Editar</Link>
            <Link to={"deleteDesenvolvedor/"+desenvolvedor.id} className="btn btn-primary">Editar</Link>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow;
