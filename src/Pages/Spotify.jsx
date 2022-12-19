import axios from 'axios';
import { useState, useEffect } from 'react';
const Spotify = () => {

    
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const [select, setSelect]=useState([])
  const [name, setNombreR]=useState([])
  const [teacherR, setTeacher]=useState([])

const peticionGet=async()=>{
  await axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
    console.log(response.data)
  }).catch(error=>{
    console.log(error);
  })
}
const ApiMaterias = ()=>{
  axios.get(`${Request.request}/Materia/api`).
  then((response)=>{
      console.log(response.data.api)
  }).catch((error)=>{
      console.log(error)
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
ApiMaterias();
},[])

  return (
    <div class="cardByForm">

  <div class="menu">
    <div class="opener"><span></span><span></span><span></span></div>
  </div>
  <h2 class=" text-center nameText">Morgan Sweeney</h2>
  <div class="title">Ant Collector</div>
  <div class="actions">
    <div class="follow-info">
      <h2><a href="#"><span>12</span><small>Followers</small></a></h2>
      <h2><a href="#"><span>1000</span><small>Following</small></a></h2>
    </div>

  </div>
  <div class="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.
  <form className="sign-in-form formFormSign px-4">
                            <div className="actual-form pt-5" >
                                <div className="input-wrap ">
                                    <input
                                        type="email"
                                        className="input-field"
                                        value={name} 
                                        onChange={(e) => setNombreR(e.target.value)}
                                        required
                                    />
                                    <label className=' text-dark labelFormSign'>Nombre Materia</label>
                                </div>
                                <div className="input-wrap ">
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={teacherR}
                                        onChange={(e) => setTeacher(e.target.value)}
                                        required
                                    />
                                    <label className=' text-dark labelFormSign'>Profesor</label>
                                </div>
                                <div className="input-wrap">
                                    <select className=" input-field my-2" value={select} onChange={(e) => setSelect(e.target.value)} >
                                        <option selected></option>
                                        <option>Extra</option>
                                        <option>Lunes</option>
                                        <option>Martes</option>
                                        <option>Miércoles</option>
                                        <option>Jueves</option>
                                        <option>Viernes</option>
                                        <option>Sábado</option>
                                    </select>
                                    <label className=' text-dark labelFormSign'>Día Semanal</label>
                                </div>
                                <div class="btnMatricular">
                                  <button>Matricular Materia</button>
                                </div>                            
                            </div>
                        </form>
  </div>


</div>

)
}
 
export default Spotify;