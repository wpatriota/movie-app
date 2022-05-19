import React, {Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import TableRowNiveis from './TableRowNiveis';
import MyGlobleSetting from './MyGlobleSetting';

class DisplayNivel extends React.Component{
  constructor() {
       super();
       //this.props = {value: '', products: ''};
       
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
     tabRow(){
       if(this.props.niveis instanceof Array){
         return this.props.niveis.map(function(object, i){
             return ;

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
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
 }
}
export default DisplayNivel;