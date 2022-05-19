import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyGlobleSetting from './MyGlobleSetting';


class TableRowNiveis extends React.Component {
  constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/api_getAllNiveis/${this.props.obj.id}`;
    const history = useNavigate();

    axios.delete(uri);
      history('/display-item');
  }
  render() {
    const nivel = this.props.nivel;
    return (
        <tr>
          <td>
            {nivel.id}
          </td>
          <td>
            {nivel.nivel}
          </td>          
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"updateNivel/"+nivel.id} className="btn btn-primary">Editar</Link>
            <Link to={"deleteNivel/"+nivel.id} className="btn btn-danger">Excluir</Link>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRowNiveis;
