import Aos from "aos"; 
import "aos/dist/aos.css";
import { useEffect,useState } from 'react';
const NotesG = ({CreateNoteG, DtaNotesGenerales, CompletedNoteG, UnCompletedNoteG}) => {
    const [titleNote, seTtitleNote] = useState([])
    const [dateNote, setDateNote] = useState([])
    const [descriptionNote, setDescriptionNote] = useState([])

    // Funcion que retorna la animación del portafolio
    useEffect(()=>{
        Aos.init({ duration: 1000 });
        }, []);    
    return ( 
        <div className="row portfolio-container filter-container" >
        {DtaNotesGenerales.map((DtaNotesGenerales)=>{
            return(
            <div className='container col-md-12 py-2' key={DtaNotesGenerales._id}>
                <div className="blog-slider">
                <div className="blog-slider__wrp ">
                <div className="blog-slider__item ">
                    <div className={DtaNotesGenerales.estado === true ? 'blog-slider__img' : 'blog-slider__imgFinal'}>
                    
                    </div>
                    <div className="">
                    <span className="blog-slider__code">{DtaNotesGenerales.fecha}</span>
                    <div className="blog-slider__title">{DtaNotesGenerales.titulo}</div>
                    <div className="blog-slider__text">{DtaNotesGenerales.descripcion} </div>
                    <div className={DtaNotesGenerales.estado === true ? 'blog-slider__button' : 'blog-slider__buttonFinal'} onClick={DtaNotesGenerales.estado == true ? ()=>UnCompletedNoteG(DtaNotesGenerales._id, DtaNotesGenerales.titulo, DtaNotesGenerales.estado, DtaNotesGenerales.descripcion, DtaNotesGenerales.fecha, DtaNotesGenerales.collectionUniversity) : ()=>CompletedNoteG(DtaNotesGenerales._id, DtaNotesGenerales.titulo, DtaNotesGenerales.estado, DtaNotesGenerales.descripcion, DtaNotesGenerales.fecha, DtaNotesGenerales.collectionUniversity )}>
                        {DtaNotesGenerales.estado === true ? 'Activo' : 'Finalizado'}</div>
                    </div>
                </div>            
                </div>
                </div>
            </div>
            )
        })}
        {/* Card Form By Create NoteG */}
            <div className="cardByForm container text-center my-5">
                <div className="menu">
                    <div className="opener"><span></span><span></span><span></span></div>
                </div>
                <h3 className=" text-center nameText">¿Deseas Agregar Una Nueva Nota?</h3>
                {/* <div className="title">Ant Collector</div> */}
                <div className="desc my-2">Explora las Notas Generales! Las cuales te serán útiles para recordatorios, apuntes cortos e inclusive como complemento adicional para tus Materias.
                        <form className="sign-in-form formFormSign ">
                            <div className="actual-form " >
                            <div className="input-wrap ">
                                    <input
                                        type="email"
                                        className="input-formAmatist"
                                        value={titleNote} 
                                        onChange={(e) => seTtitleNote(e.target.value)}
                                        required
                                    />
                                    <label className=' text-dark labelFormSign'>Título Note</label>
                                </div>
                                <div className="input-wrap ">
                                    <input
                                        type="date"
                                        className="input-formAmatist"
                                        value={dateNote} 
                                        onChange={(e) => setDateNote(e.target.value)}
                                        required
                                    />
                                    <label className=' text-dark labelFormSign'>Date</label>
                                </div>                                
                                <div className="input-wrap">
                                    <textarea value={descriptionNote} onChange={(e)=> setDescriptionNote(e.target.value)} className="input-formAmatist  my-2" cols="30" rows="50"></textarea>
                                    <label className=' text-dark labelFormSign'>Descripción</label>
                                </div>
                              <div className="btnMatricular my-5 text-light" style={{padding: '20px'}}>
                                <input type="button" value="Crear Nota" onClick={()=>CreateNoteG(titleNote,dateNote,descriptionNote, seTtitleNote, setDateNote,setDescriptionNote)} />
                              </div>                            
                          </div>
                        </form>
            </div>
        </div>
        </div>
     );
}
 
export default NotesG;