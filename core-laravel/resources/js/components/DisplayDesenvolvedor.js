import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';

class DisplayDesenvolvedor extends Component {
  constructor() {
       super();
       this.state = {value: '', desenvolvedores: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/desenvolvedores')
       .then(response => {
         this.setState({ desenvolvedores: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.desenvolvedores instanceof Array){
         return this.state.desenvolvedores.map(function(object, i){
             return <TableRow key={i} desenvolvedor={object} />;

         })
       }
     }


  render(){
    return (
      <div>
        <h1>Desenvolvedores</h1>


        <div className="row">
          <div className="col-md-10"><Link to="/createDesenvolvedor">Niveis</Link></div>
          <div className="col-md-2">
            <Link to="/createDesenvolvedor">Incluir Desenvolvedor</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Nível</th>
                <th>Sexo</th>
                <th>Data Nascimento</th>
                <th width="200px">Ações</th>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayDesenvolvedor;

