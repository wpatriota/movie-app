import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyGlobleSetting from './MyGlobleSetting';


class TableRowNiveis extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/api_deleteNivel/${this.props.nivel.id}`;
    const history = useNavigate();

    axios.delete(uri);
      history('/DisplayNivel');
  }
  render() {
    //const nivel = this.props.nivel;
    return (
        <tr>
          <td>
            {this.props.nivel.id}
          </td>
          <td>
            {this.props.nivel.nivel}
          </td>          
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"/updateNivel/"+this.props.nivel.id} className="btn btn-primary">Editar</Link>
            <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRowNiveis;
