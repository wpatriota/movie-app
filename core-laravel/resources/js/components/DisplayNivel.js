import React, {Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import TableRowNiveis from './TableRowNiveis';
import MyGlobleSetting from './MyGlobleSetting';

class DisplayNivel extends React.Component{
  constructor(props) {
       super(props);
       this.state = {value: '', niveis: ''};       
     }

     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/api_getAllNiveis')
       .then(response => {
         this.setState({ niveis: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRowNiveis(){
       if(this.state.niveis instanceof Array){
         return this.state.niveis.map(function(object, i){
          console.log(object);
             return <TableRowNiveis key={i} nivel={object} />;

         })
       }
     }

  render(){
    return (
      <div>
        <h1>Niveis</h1>


        <div className="row">
          <div className="col-md-10"><Link to="/">Desenvolvedores</Link></div>
          <div className="col-md-2">
            <Link to="/CreateNivel">Incluir Nível</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Nivel</td>
                <td width="200px">Ações</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRowNiveis()}
            </tbody>
        </table>
    </div>
    )
 }
}
export default DisplayNivel;