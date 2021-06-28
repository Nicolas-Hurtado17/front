
import React , {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


  const Region = () =>{
    const [regions, setRegions] = useState([])
    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/api/welcome")
        .then(response => {
          
            setRegions(response.data)
        })
    },[])
    const [provincias, setIdProvincias] = useState([]);
    const handlerCArgarProvincias = function (e){
      if (e.target.value) {
        axios.get("http://127.0.0.1:8000/api/provincia/" + e.target.value)
        .then(response => {
            console.log(response.data);
            setIdProvincias(response.data);
        })
      }
      // const opcion = e.target.value;
      // console.log(opcion);
      // setIdProvincias(opcion);
      
    }
    const changeProvincias = function(id) {
      console.log('provincia' + id);
      axios.get("http://127.0.0.1:8000/api/provincia/" + id)
        .then(response => {
            console.log(response.data);
        })
    }
    const [ciudades, setIdCiudades] = useState([]);
    const handlerCArgarCiudades = function (e){
      if (e.target.value) {
        axios.get("http://127.0.0.1:8000/api/ciudad/" + e.target.value)
        .then(response => {
            console.log(response.data);
            setIdCiudades(response.data);
        })
      }
    }
    const changeCiudad = function(id) {
      console.log('ciudad' + id);
      axios.get("http://127.0.0.1:8000/api/ciudad/" + id)
        .then(response => {
            console.log(response.data);
        })
    }
    const [calles, setIdCalles] = useState([]);
    const handlerCArgarCalles = function (e){
      if (e.target.value) {
        axios.get("http://127.0.0.1:8000/api/calle/" + e.target.value)
        .then(response => {
            console.log(response.data);
            setIdCalles(response.data);
        })
      }
    }
  return (
   <div className="container col-lg-12">
       <div className="row">
     <div className="form-group">
     <select name="region" className="form-control" onClick={handlerCArgarProvincias} >
     <option value={0}>Selecione Region</option>
{   
    regions.map((item, i) =>(
      
        <option key={"region" +i} value={item.id}>{item.nombre}</option>
        
    
    ))
    }</select>
<select name="provincia" id="selprovincias"className="form-control"  onClick={handlerCArgarCiudades}>
<option value={0}>Selecione Provincia</option>
{
  provincias.map((item, i) => (
    <option key={"provincia" +i} value={item.id}>{item.nombre}</option>
  ))
}
</select>
<select name="ciudad" id="selciudades"className="form-control" onClick={handlerCArgarCalles} >
<option value={0}>Selecione Ciudad</option>
{
  ciudades.map((item, i) => (
    <option key={"ciudad" +i} value={item.id}>{item.nombre}</option>
  ))
}
</select>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Calles</th>
     
    </tr>
  </thead>
  <tbody>
   
    {
  calles.map((item, i) => (
    
 
    <tr><th scope="row" key={"calle" +i} value={item.id}>{item.nombre}</th></tr>
      ))  
    }
    
  
  </tbody>
</table>
     </div>
     </div>
   </div>
  );

}


export default Region;
