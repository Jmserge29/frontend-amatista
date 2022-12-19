import React from "react"
import Isotope from "isotope-layout"
import NotesG from "../Components/Notes/NotesG"
import Materia from "../Components/Materia/Materia";
import Aos from "aos"; 
import "aos/dist/aos.css";
import axios from 'axios';
import { useState } from "react";
import {useParams} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import logo from '../Components/Materia/binary-code.png';
import Image01 from '../img/Malecon.jpg';
import toast, { Toaster } from 'react-hot-toast';
import Request from '../env/requests';


const CollectionMaterias = () => {
    const collectionUniversity = useParams();
    const [DtaNotesGenerales, setDtaNotesGenerales] = useState([])
    const [percentDta, setPercentDta] = useState([])
    const [titleNote, seTtitleNote] = useState([])
    const [dateNote, setDateNote] = useState([])
    const [descriptionNote, setDescriptionNote] = useState([])
    const moduloM = 'Materia';
    const moduloNG = 'NotaG';
    const functionC = 'creado';
    const functionD = 'eliminado';   
    const functionA = 'actualizado';
    const notify = (modulo, name) => toast.success(`Se ha creado la ${modulo} ${name} correctamente! ✨`,
    {
      style: {
        borderRadius: '20px',
        background: '#333',
        color: '#fff',
      },
    }
  );

  const notifyError = (name) => toast.error(`Ha ocurrido un error 😭`,
  {
    style: {
      borderRadius: '20px',
      background: '#333',
      color: '#fff',
    },
  }
);

    const userpicPositionning = {
      position:'relative',
      top:'-60px',
      marginBottom: '-30px'
    }

    const CreateMateria =async(name, teacher, day_week, setSelect, setNombreR, setTeacher)=>{
      axios.post(`${Request.request}/Materia/createMaterias`, {
      name,
      collectionUniversity: collectionUniversity.id,
      teacher,
      day_week,
      }).then((respuesta)  => {
        DashboardMateria()
        setNombreR("")
        setSelect("")
        setTeacher("")
        notify(moduloM, name);
        // Swal.fire(
        //       `Se ha Matrciulado la Materia ${name} correctamente!`,
        //       'Buena suerte! Tu puedes con absolutamente todo.',
        //       'success'
        //   )
          }
        )
      .catch((error) => {
        notifyError()
      });
    }

    const DashboardMateria= ()=>{
      // axios.get(`https://floating-sands-05574.herokuapp.com/Materia/Dashboard/${collectionUniversity.id}`)
      axios.get(`${Request.request}/Materia/Dashboard/${collectionUniversity.id}`)
      .then((response)=>{
        setPercentDta(response.data.data)
        console.log(response.data.data)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const EliminarMateria = (id)=>{
      axios.delete(`${Request.request}/Materia/Materias/${id}`)
      .then((response)=>{
        DashboardMateria()
        Swal.fire(
          'Se ha eliminado correctamente!',
          'Solicitud Exitosa!',
          'success'
        )
      }).catch((error)=>{
        console.log(error)
      })
    }

    const ObtenerNotesGenerales=()=>{
      axios.get(`${Request.request}/NoteG/NotesGeneralsCollection/${collectionUniversity.id}`).then((response)=>{
        setDtaNotesGenerales(response.data.data)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const CreateNoteG = async(titulo, fecha, descripcion, seTtitleNote, setDateNote,setDescriptionNote) =>{
      console.log('datos: ', titulo, fecha, descripcion)
      const modulo = 'NotaG'
      await axios.post(`${Request.request}/NoteG/createNotesGenerals`, {
        titulo,
        estado: true,
        descripcion,
        fecha,
        collectionUniversity: collectionUniversity.id
      }).then((response)=>{
        seTtitleNote("");
        setDateNote("");
        setDescriptionNote("");
        ObtenerNotesGenerales();
        Swal.fire(
          `Se ha creado la Nota titulada '${titulo}', de forma exitosa!`,
          'Esfuerzate mucho para eso que tanto quieres',
          'success'
      )
      }).catch((error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: 'Revisa el formulario nuevamente y asegurate de haber completado correctamente todos los campos requeridos'
        })

      })
    }

    const CompletedNoteG = async(_id, titulo, estado, descripcion, fecha, collectionUniversity) =>{
        await axios.put(`${Request.request}/NoteG/NotesGenerals/${_id}`,{
        _id,
        titulo,
        estado: true,
        descripcion,
        fecha,
        collectionUniversity
      }).then((response)=>{
          ObtenerNotesGenerales()
      }).catch((error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: 'Inténtalo más tarde, muy pronto se resolverá'
        })
      })
    }

    const UnCompletedNoteG = async(_id, titulo, estado, descripcion, fecha, collectionUniversity) =>{
      await axios.put(`${Request.request}/NoteG/NotesGenerals/${_id}`,{
      _id,
      titulo,
      estado: false,
      descripcion,
      fecha,
      collectionUniversity
      }).then((response)=>{
        ObtenerNotesGenerales()
      }).catch((error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: 'Inténtalo más tarde, muy pronto se resolverá'
        })
      })
    }


    React.useEffect(()=>{
        Aos.init({ duration: 1000 });
        ObtenerNotesGenerales()
        DashboardMateria()
      }, []);
    
    
          // init one ref to store the future isotope object
      const isotope = React.useRef()
      // store the filter keyword in a state
      const [filterKey, setFilterKey] = React.useState('Materias')
    
      // initialize an Isotope object with configs
      React.useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
          itemSelector: '.filter-item',
          layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    
      }, [])
    
      // handling filter key change
      React.useEffect(() => {
        filterKey === '*'
          ? isotope.current.arrange({filter: `*`})
          : isotope.current.arrange({filter: `.${filterKey}`})
      })

      const handleFilterKeyChange = key => () => setFilterKey(key)

    return ( 
          <section id="" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Materias</h2>
                <p>
                    Hellow! This's module <code> Materia </code>.
                </p>
                <p className='py-2'>
                    En este módulo se podrán matricular las diferentes materias de tu semestre.
                </p>
                <p> 
                    Podrás disfrutar de un diseño personalizado por cada materia, para ello
                </p>
                <p>
                  deberás tener en cuenta : completar el campo <code> Matricular Materia </code> con
                </p>
                <p>
                  el nombre correspondiente que aparece en nuestra base de datos <code> <a
              className="App-link text-success"
              href="../APIPages"
              target="_blank"
              rel="noopener noreferrer">
              Aquí
            </a></code>.
                </p>
                
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                      <li onClick={handleFilterKeyChange('Materias')}>Materias</li>
                      {/* <li onClick={handleFilterKeyChange('Notes')}>Notas X Materia</li> */}
                      <li onClick={handleFilterKeyChange('NotesG')}>Notes</li>
                      {/* <li onClick={handleFilterKeyChange('*')}>Ver Todo</li> */}
                      <li onClick={handleFilterKeyChange('TableAdmin')}>Tabla Administrativa</li>
                  </ul>
              </div>
            </div>

            <hr />
            <ul className="filter-container">
                <div className="filter-item Materias">
                    <Materia percentDta={percentDta} CreateMateria={CreateMateria}/>
                </div>
                <div className="filter-item NotesG">
                    <NotesG CreateNoteG={CreateNoteG} DtaNotesGenerales={DtaNotesGenerales} UnCompletedNoteG={UnCompletedNoteG} CompletedNoteG={CompletedNoteG}/>
                </div>
                <div className='filter-item TableAdmin container'>
                <div className="card text-light" style={{background: '#7b27d8'}}>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5 text-center">
                                  Materia
                              </div>
                              <div className="col-4 text-center">
                                Profesor
                              </div>
                              <div className="col-3 text-center">
                                  Acciones
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* {percentDta == null ? <h2>Las Notas son Nulas</h2> : <h2>Existen Notas de Universidad!</h2>} */}
                {percentDta.map((percentDta)=>{
                        return(
                          <div className="card" key={percentDta.IDMongo}>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5 text-center">
                                  {percentDta.name}
                              </div>
                              <div className="col-4 text-center">
                              {percentDta.teacher}
                              </div>
                              <div className="col-3 text-center">
                              <i className="bi bi-calendar2-x-fill" onClick={()=>EliminarMateria(percentDta.IDMongo)}></i> 
                              </div>
                            </div>
                          </div>
                        </div>
                        )})}
                </div>
            </ul>
          </div>
          <a href="#" class="btn-flotante"><i class="bi bi-mortarboard-fill"></i></a>
          <Toaster />
        </section>
     );
}
 
export default CollectionMaterias;