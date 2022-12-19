// Imports
import Aos from "aos"; 
import "aos/dist/aos.css";
import { useEffect, useState} from 'react';
import NavBar from "../Components/NavBar/NavBar";
import {useNavigate} from 'react-router-dom';
import React from "react";
import Isotope from "isotope-layout";
import axios from 'axios';
import University from '../Components/University/University';
import {useParams} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import logo from '../Components/Materia/binary-code.png';
import Request from "../env/requests";

const CollectionsUniversity = () => {
    // Variables de React y UseState
    const [DtaUniversidades, setDtaUniversidades] = React.useState([])
    const [name, setName] = useState([])
    const [semestre, setSemestre] = useState([])
    const [carrera, setCarrera] = useState([])
    const [ciudad, setCiudad] = useState([])

    const _idUser = useParams();


    // Variables para Modal
    const [show, setShow] = useState(false);
    // Funciones para Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    

    const ObtenerUniversitys = async () =>{
        console.log('cargando Universidades')
        await axios.get(`${Request.request}/University/Collection_idUser/${_idUser.id}`)
        .then((response)=>{
            console.log(response.data.data)
            setDtaUniversidades(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const CreateUniveristy =async (e)=>{
        e.preventDefault();
        axios.post(`${Request.request}/University/createCollection`, {
        name,
        semestre,
        carrera,
        ciudad,
        _idUser: _idUser.id
        }).then((respuesta)  => {
            ObtenerUniversitys()
            Swal.fire(
                `Estás inscrito en la ${name}, felicidades!`,
                'Buena suerte! Tu puedes con absolutamente todo.',
                'success'
            )
            handleClose()
            }
        )
        .catch((error) => {
            console.log(error);
            Swal.fire({
            icon: 'error',
            title: 'Oops... Lo sentimos',
            text: 'Parece que ocurrió un error con los datos ingresados, inténtelo otra vez'
            })
        });
    }

    useEffect(()=>{
        ObtenerUniversitys()
    }, []);


    // Funcion que retorna la animación del portafolio
    React.useEffect(()=>{
        Aos.init({ duration: 3000 });
    }, []);

    const userpicPositionning = {
		position:'relative',
		top:'-60px',
		marginBottom: '-30px'
	}

    const StyleWithMateria = {
        height:'60px', 
        backgroundSize:'cover', 
        borderRadius:'20px 20px 0 0'
	}

    const StyleWithOutMateria= {
        height:'60px', 
        width:'1200px', 
        backgroundSize:'cover', 
        borderRadius:'20px 20px 0 0'
    }

    return ( <>
        <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
            <div className="section-title py-2">
                <h2>Universidades</h2>
                <p>
                    Hellow! This's module <code> Univeristy </code>.
                </p>
                <p className='py-2'>
                    En este módulo se podrán inscribir tus Universidades.
                </p>
                <p> 
                    Espero que puedas aprovechar al máximo tu tiempo y puedas organizarte de la mejor manera.
                </p>
                <code> Exitos! </code>

            </div>

            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li className="filter-active" >Universidades</li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-item filter-app filter-item University">
                <University DtaUniversidades={DtaUniversidades}/>
            </div>
            <div className="col-md-4 py-2">
                <div className='card shadow'>
                    <div style={DtaUniversidades.length > 1 ? StyleWithMateria : StyleWithOutMateria}></div>
                    <div className="py-2">
                        <div
                            style={userpicPositionning}
                            className="text-center ">
                        </div>
                        <form className='sign-in-form formFormSign' onSubmit={CreateUniveristy}>
                    <h2 className='py-4 text-center'>Inscribe Tú Universidad!</h2>
                    <div className="actual-form">
                        <div className="input-wrap py-2">
                            <select className=" input-field my-1" value={name} onChange={(e) => setName(e.target.value)}>
                                <option selected></option>
                                <option>Universidad Del Norte</option>
                                <option>Universidad Autónoma Del Caribe</option>
                                <option>Universidad Del Atlántico</option>
                                <option>Universidad Pontificia Bolivarian</option>
                                <option>Universidad De Los Andes</option>
                                <option>Universidad De La Costa</option>
                                <option>Universidad Libre</option>
                            </select>
                            <label className='labelFormSign py-4'>Universidad</label>
                        </div>
                        <div className="input-wrap">
                            <input
                                type="number"
                                className="input-field"
                                value={semestre} onChange={(e) => setSemestre(e.target.value)}
                                required
                            />
                            <label className='labelFormSign'>Semestre</label>
                        </div>
                        <div className="input-wrap">
                            <input
                                type="text"
                                className="input-field"
                                value={carrera} onChange={(e) => setCarrera(e.target.value)}
                                required
                            />
                            <label className='labelFormSign'>Carrera</label>
                        </div>
                        <div className="input-wrap">
                            <input
                                type="text"
                                className="input-field"
                                value={ciudad} onChange={(e) => setCiudad(e.target.value)}
                                required
                            />
                            <label className='labelFormSign'>Ciudad</label>
                        </div>                                    
                        <input type="submit" value="Inscribir Universidad" className="sign-btn my-5" />
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
        <a href="#" class="btn-flotante"><i class="bi bi-mortarboard-fill"></i></a>
    </section>
    </> );
}
 
export default CollectionsUniversity;