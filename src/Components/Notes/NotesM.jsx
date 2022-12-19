const NotesM = ({DtaNotesMaterias, CompletedNote, UnCompletedNote, DeleteNote}) => {
    return ( 
        <div className="row portfolio-container filter-container" style={{backgroundColor: '#F5F9F7'}}>
        <div class="job">
        <div class="CardSliderAmazine">
            <div class="main-container">
            <div class="searched-jobs">
                <div class="job-cards">

        {DtaNotesMaterias.map((DtaNotesMaterias)=>{
                return(
                            <div class="job-card" style={{backgroundColor: '#FFF'}}>
                                <div class="job-card-header">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor: "#fe5b5f"}}>
                                    <path d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z" fill="#fff" />
                                </svg>
                                <div class="menu-dot"></div>
                                </div>
                                <div class="job-card-title">{DtaNotesMaterias.titulo}</div>
                                <div class="job-card-subtitle">
                                {DtaNotesMaterias.descripcion}
                                </div>
                                <div class="job-detail-buttons">
                                <button class="search-buttons detail-button">{DtaNotesMaterias.fecha}</button>
                                {DtaNotesMaterias.estado == true ? <button class="search-buttons detail-button mx-3" style={{backgroundColor: '#2ECC71'}}>Realizado</button> : <button class="search-buttons detail-button mx-3" style={{backgroundColor: '#fe5b5f'}}>Pendiente</button>}
                                </div>
                                <div class="job-card-buttons">
                                    {DtaNotesMaterias.estado == true ? <button class="search-buttons card-buttons" style={{ backgroundColor: '#2f2f33', color: '#fff'}} onClick={()=>UnCompletedNote(DtaNotesMaterias._id, DtaNotesMaterias.titulo, DtaNotesMaterias.estado, DtaNotesMaterias.descripcion, DtaNotesMaterias.fecha, DtaNotesMaterias.materia)}>Completado! <i class="bi bi-emoji-laughing"></i></button> : <button class="search-buttons card-buttons" style={{ backgroundColor: '#2f2f33', color: '#fff'}} onClick={()=>CompletedNote(DtaNotesMaterias._id, DtaNotesMaterias.titulo, DtaNotesMaterias.estado, DtaNotesMaterias.descripcion, DtaNotesMaterias.fecha, DtaNotesMaterias.materia)}>Incompleto <i class="bi bi-emoji-frown"></i></button>}
                                <button class="search-buttons card-buttons-msg" style={{backgroundColor: '#5846f9', color: '#fff'}} onClick={()=>DeleteNote(DtaNotesMaterias._id)}>Eliminar</button>
                                </div>
                                </div>                            
                )
        })}
        </div>
        </div>
        </div>
        </div>
        </div>          
        </div>
    );
}

export default NotesM;