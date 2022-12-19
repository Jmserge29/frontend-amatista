import { useEffect, useState } from 'react';
import axios from 'axios';
import Request from '../env/requests';

const APIPages = () => {
    const [API, setAPI] = useState([]);
    const [busqueda, setBusqueda] = useState([]);
    const [varTable, setVarTable] = useState([]);
    const ApiMaterias = ()=>{
        axios.get(`${Request.request}/Materia/api`).
        then((response)=>{
            setAPI(response.data.api)
            setVarTable(response.data.api)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        ApiMaterias()
    },[])
    const onChangeHandler = (e)=>{
      setBusqueda(e.target.value)
      filtrar(e.target.value)
    }
    const filtrar=(terminoBusqueda)=>{
      var resultados = varTable.filter((elemento)=>{
        if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return elemento;
        }
      })
      setAPI(resultados)
    }
    return (
            <div className=''>
              <section id="portfolio" className=" container portfolio">
                <div className=''>
                  <div className='col-12'>
                    <div className='actual-form'>
                      <div className="section-title py-2">
                          <h2>API Storage Materias </h2>
                          <p>
                              Hellow! This's module <code> API - Materias </code>.
                          </p>
                          <p className='my-1'>Aquí podrás interactuar con nuestra API al buscar el nombre de tu materia requerida </p><p>para posteriormente asignarlo en el módulo <code> Materias </code> con sus respectivos datos.</p>
                          <p className=' my-1 recordatorio'>
                            Recuerda. Si la materia requerida no se encuentra registrada en nuestra Base de Datos, 
                            podrás inscribir perfectamente el nombre<p className='w-20 my-1'> tal cual de la materia. De esta manera se le asignará </p>
                            <p className=' my-1'>un diseño por defecto a la misma y después de una posible revisión</p> se le asignará un nuevo diseño 
                            personalizado.
                          </p>
                      </div>
                      <div className='input-wrap'>
                        <input type='text' placeholder='Bases de Datos I' className='my-3 input-field' value={busqueda} onChange={onChangeHandler}/>
                        <label className='labelFormSign'>Buscar en el Registro de Materias</label>
                      </div>
                    </div>
                    <div className="card my-2 text-light" style={{background: '#7b27d8'}}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 text-center ">
                              Materias Disponibles
                              <span class="badge badge-primary badge-pill">{API.length}</span>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      {API.map((API)=>{
                        return(
                          <div className="card col-4 text-center" key={API.id}>
                            <div className="card-body text-center">
                                <div className="col-12 text-center">
                                    {API.id}
                                </div>
                            </div>
                          </div>
                      )})}
                    </div>
                  </div>
                </div>
              </section>
            </div>
  );
}
 
export default APIPages;