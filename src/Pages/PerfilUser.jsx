import NavBar from "../Components/NavBar/NavBar";


const PerfilUser = () => {

    const UserInstagram = 'jserge_29w'

    const InstagramUserLink = `https://www.instagram.com/${UserInstagram}/`

    return ( 
    <div>
        <NavBar/>
        <section className='container'>
            <div className="row py-5">
                {/* Columna 1 */}
                <div className="col-lg-3">
                    {/* <h1>Columna 1</h1> */}
                    <div>
                        <div className="card mb-4 github">
                            <div className="card-body text-center">
                                <img src="https://reggaetoncolombiano.com.co/wp-content/uploads/2021/08/BeFunky-photo-21.jpg" alt="avatar"
                                className="rounded-circle img-fluid" style={{width: '150'}}/>
                                <h5 className="my-3">Ferxxo</h5>
                                <p className="text-muted mb-1">Exotiqueo</p>
                                <p className="text-muted mb-4">Miami, EE.UU</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-primary">Follow</button>
                                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Columna 2 */}
                <div className="col-lg-8">
                    <h1>Columna 2</h1>
                    <h4>Name User</h4>
                    <p>This information the user by perfil in the Amatista</p>
                    <hr/>
                    <p>This second parraf where your information instagram, collections, university, taks, about this dashboard</p>
                        <a href={InstagramUserLink}>
                            <h4 >Jmserge29w <i className="bi bi-instagram px-1 instagram"></i></h4>
                        </a>
                    <div className="row py-4">
                        <div className="col-md-6 py-2">
                            <div className="card" style={{borderRadius: '35'}}>
                            <div className="card-body" style={{borderRadius: '35'}}>
                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                </p>
                                <p className="mb-1" style={{fontSize: '.77rem'}}>Total Tareas</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Tareas De Universidad Del Atlantico</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="72"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>One Page</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="89"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Mobile Template</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="55"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Backend API</p>
                                <div className="progress rounded mb-2" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="66"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 py-2">
                            <div className="card" style={{borderRadius: '35'}}>
                            <div className="card-body" style={{borderRadius: '35'}}>
                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                </p>
                                <p className="mb-1" style={{fontSize: '.77rem'}}>Web Design</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Website Markup</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="72"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>One Page</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="89"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Mobile Template</p>
                                <div className="progress rounded" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="55"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Backend API</p>
                                <div className="progress rounded mb-2" style={{height: "5"}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="66"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div> );
}
 
export default PerfilUser;