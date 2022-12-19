import {useNavigate} from 'react-router-dom';

const University = ({DtaUniversidades}) => {
    // Variables de uso React y Estados UseState
    const history = useNavigate();

    return ( 
        <div className="row portfolio-container filter-container" >
        {DtaUniversidades.map((DtaUniversidades)=>{
                return(
                <div className="col-md-4 p-2  filter-app" key={DtaUniversidades._id}>
                    <div className="portfolio-wrap" onClick={() => history(`/Materias/${DtaUniversidades._id}`)}>
                        {DtaUniversidades.name === String('Universidad Del Norte') && <img src="https://orientacion.universia.net.co/imgs2011/imagenes/fachadanor-2013_04_25_175919.jpg" className="img-fluid" alt=""/>}
                        {DtaUniversidades.name === String('Universidad Autónoma Del Caribe') && <img src="https://www.uac.edu.co/media/k2/items/cache/1193f93d590ab70b335fd829a29c10a1_XL.jpg" className="img-fluid" alt=""/>}
                        {DtaUniversidades.name === String('Universidad Del Atlántico') && <img src="https://www.las2orillas.co/wp-content/uploads/2016/01/Universidad-Atlantico.jpg" className="img-fluid" alt=""/>}
                        {DtaUniversidades.name === String('Universidad Pontificia Bolivariana') && <img src="https://www.upb.edu.co/es/imagenes/img-interna-benificios-acreditacion-upbgga-1464190197299.jpg" className="img-fluid" alt=""/>}
                        {DtaUniversidades.name === String('Universidad De Los Andes') && <img src="https://cr00.epimg.net/radio/imagenes/2020/03/10/nacional/1583804299_451574_1583804549_noticia_normal_recorte1.jpg" className="img-fluid" alt=""/>}
                        {DtaUniversidades.name === String('Universidad De La Costa') && <img src="https://universidadesyprofesiones.com/images/universidades/campus/universidad-de-la-costa-banner.jpg" className="img-fluid" alt=""/>}
                        {DtaUniversidades.name === String('Universidad Libre') && <img src="https://www.latinpymes.com/wp-content/uploads/2018/07/Universidad-Libre.jpg" className="img-fluid" alt=""/>}
                    <div className="portfolio-info">
                        <h4>{DtaUniversidades.name}</h4>
                        <p> <i className="bi bi-geo-fill"></i>{DtaUniversidades.ciudad}</p>
                        <p> <i className="bi bi-mortarboard-fill"></i> {DtaUniversidades.carrera}</p>
                        <p> {DtaUniversidades.semestre}° Semestre</p>
                    </div>
                    {/* <div className="portfolio-links">
                        <a href="https://orientacion.universia.net.co/imgs2011/imagenes/fachadanor-2013_04_25_175919.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                    </div> */}
                    </div>
                </div>
                )
            })}  
        </div>
     );
}
 
export default University;