import {useNavigate} from 'react-router-dom';
import logo from '../Materia/binary-code.png';
import logoLenguaje from '../Materia/arabic.png';
import logoComunication from '../Materia/social-media.png';
import logoBasesDB from '../Materia/big-data.png';
import logoComputador from '../Materia/motherboard.png';
import logoDescon from '../Materia/unknown.png';
import logoAtomo from '../Materia/atomo.png';
import logoLimite from '../Materia/limite.png';
import logoElectiva from '../Materia/argumento.png';
import logoDiseño from '../Materia/disenador-grafico.png';
import logoRedes from '../Materia/laptop.png';
import logoSoftware from '../Materia/3d-modeling.png';
import logoCompilador from '../Materia/compiler.png';
import logoEtica from '../Materia/divertido.png';
import logoDerecho from '../Materia/etica.png';
import logoAprendizaje from '../Materia/inteligencia-artificial.png';
import logoInvestigacion from '../Materia/buscar.png';
import logoIngWeb from '../Materia/dashboard.png';
import logoExamen from '../Materia/legal-document.png';
import Badge from "react-bootstrap/Badge";
import { useState } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';

const Materia = ({percentDta, CreateMateria}) => {

    // Variables de uso React y Estados UseState
    const history = useNavigate();
    const [select, setSelect]=useState([])
    const [name, setNombreR]=useState([])
    const [teacherR, setTeacher]=useState([])

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

    return (
        <div className="row portfolio-container filter-container" >
            
        {percentDta.map((percentDta)=>{
            return(
            <div className="col-md-4 py-2" key={percentDta.IDMongo} >
            <div className='card shadow' onClick={() => history(`/Tasks/${percentDta.IDMongo}`)}>
                    <div style={{backgroundImage: `url(${percentDta.header})`,height:'110px',backgroundSize:'cover',borderRadius:'20px 20px 0 0'}}></div>
                    <div className="">
                        <div
                            style={userpicPositionning}
                            className="text-center ">
                                {percentDta.header === String('https://image.shutterstock.com/image-illustration/global-communication-business-concept-translate-600w-321469727.jpg') && <img src={logoLenguaje} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-illustration/closeup-view-modern-gpu-card-600w-1720101667.jpg') && <img src={logoComputador} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-illustration/server-room-3d-illustration-node-600w-1024337068.jpg') && <img src={logoBasesDB} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg') && <img src={logo} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqK9_KUg-gz7dpJeVztNt6f6m62rBPmQX38w&usqp=CAU') && <img src={logoDescon} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-photo/newspapers-computer-magazines-open-laptop-600w-1399839347.jpg') && <img src={logoComunication} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-photo/mathematical-physical-formulas-against-background-600w-2010979148.jpg') && <img src={logoAtomo} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg') && <img src={logoLimite} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-photo/image-tangram-puzzle-blocks-people-600w-1149593039.jpg') && <img src={logoElectiva} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-vector/deconstructed-postmodern-inspired-artwork-vector-600w-1816795676.jpg') && <img src={logoDiseño} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-photo/smart-city-communication-network-concept-600w-1923558464.jpg') && <img src={logoRedes} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://i.pinimg.com/564x/65/69/b8/6569b84671e254fb3531076d4fdcb84b.jpg') && <img src={logoSoftware} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://i.pinimg.com/564x/fc/5a/ec/fc5aec446b85f5fd919e99cca2ca8939.jpg') && <img src={logoCompilador} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://img.freepik.com/vector-gratis/ilustracion-concepto-etica-empresarial_114360-8737.jpg?w=2000') && <img src={logoEtica} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-photo/judges-gavel-on-library-background-600w-1723862410.jpg') && <img src={logoDerecho} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-illustration/thinking-ai-humanoid-robot-analyzing-600w-1936171492.jpg') && <img src={logoAprendizaje} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://image.shutterstock.com/image-photo/team-computer-engineers-lean-on-600w-1104131690.jpg') && <img src={logoInvestigacion} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://i.pinimg.com/564x/1a/9c/39/1a9c3904e4a7bac215219ed9a3452332.jpg') && <img src={logoIngWeb} className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://www.latinpymes.com/wp-content/uploads/2018/07/Universidad-Libre.jpg') && <img src='https://comunicaciones.unilibre.edu.co/eventos/wp-content/uploads/2021/08/1-escudo-1-150x150.png' className="rounded-circle" alt={percentDta.name}/>}
                                {percentDta.header === String('https://metropolisa.com/wp-content/uploads/2017/06/mp-proyectos-educativo-uninorte-2.jpg') && <img src={logoExamen} className="rounded-circle" alt={percentDta.name}/>}
                                {/* {percentDta.header === String('') && <img src={} className="rounded-circle" alt={percentDta.name}/>} */}
                        </div>
                        <p className="h4 text-center">
                            <span className="font-weight-bold">{percentDta.name}</span>
                            {' '}
                        </p>
                        <p className="text-center grey mb-4">{percentDta.teacher}
                            <Badge className='offset-md-1' bg="primary">{percentDta.day_week}</Badge>
                        </p>
                    </div>
                    <div className="container text-center py-3">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${percentDta.porcentaje}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{percentDta.porcentaje}%</div>
                        </div>
                    </div>
                    </div>
            </div>
            )
            })}  
    {/* Card Formulario Crear Materia */}
            <div class="cardByForm">
                <div class="menu">
                    <div class="opener"><span></span><span></span><span></span></div>
                </div>
                <h2 class=" text-center nameText">¿Nueva Matería?</h2>
                {/* <div class="title">Ant Collector</div> */}
                <div class="desc">Matricula tu nueva materia! De esta manera, te será mucho más sencillo organizar tus labores y actividades por cada Materia dividiendolas por Notas y Tareas.
                        <form className="sign-in-form formFormSign ">
                          <div className="actual-form " >
                              <div className="input-wrap ">
                                  <input
                                      type="text"
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
                              <div class="btnMatricular my-5 text-light">
                                <input type="button" value="Matricular Materia" onClick={()=>CreateMateria(name, teacherR, select, setSelect, setNombreR, setTeacher)}/>
                              </div>                            
                          </div>
                        </form>
            </div>
        </div>
    </div>
    );
}

export default Materia;