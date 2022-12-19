

const Task = ({DtaTasks,CompletedTask, UnCompletedTask, DeleteTask}) => {
    return ( 
        <div>
            <div className="row portfolio-container filter-container px-2">
            {DtaTasks.map((DtaTasks)=>{ 
                    return(
                        <div className="container col-md-12 cardTaskMay my-2" key={DtaTasks._id}>
                        <div className={DtaTasks.estado === false ? 'img-avatarUncompleted' : "img-avatar"}>
                        </div>
                        <div className="card-text">
                            <div className="portada">
                            
                            </div>
                            <div className="title-total">   
                            <div className="title">{DtaTasks.category}</div>
                            <h2>{DtaTasks.name}</h2>
                        
                        <div className="desc">{DtaTasks.description}</div>
                        <div className="actions">
                            {DtaTasks.estado === true ? <button className='colorverde buttonTaskMay' onClick={()=>UnCompletedTask(DtaTasks._id, DtaTasks.name, DtaTasks.fechaEntrega, DtaTasks.difficulty, DtaTasks.estado, DtaTasks.description, DtaTasks.category, DtaTasks.materias)}><i className="bi bi-check-circle"></i></button> : <button className='colorrojizo buttonTaskMay' onClick={()=>CompletedTask(DtaTasks._id, DtaTasks.name, DtaTasks.fechaEntrega, DtaTasks.difficulty, DtaTasks.estado, DtaTasks.description, DtaTasks.category, DtaTasks.materias)}><i className="bi bi-x-circle"></i></button> }
                            <button className='text-info buttonTaskMay'><i className="bi bi-pencil-square"></i></button>
                            <button className='text-danger buttonTaskMay' onClick={()=>DeleteTask(DtaTasks._id)}><i className="bi bi-trash3"></i></button>
                            {/* <button className='buttonTaskMay'><i className="bi bi-x-circle"></i></button> */}
                        </div></div>
                        
                        </div>
                    </div>
                    )
                })}                           
            </div>
    </div>     );
}
 
export default Task;