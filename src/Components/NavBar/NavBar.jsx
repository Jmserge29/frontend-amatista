import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';



const NavBar = () => {

    // // Defino variables
    // const [viewModal, setViewModal] = useState(false);  // Defino las variables para mostrar el Modal al Usuario
    
    // // Funciones para ejecutar el modal, cierre y ...
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return ( 
        <header id="header" className="fixed-top scrollto ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="index.html">Amatista</a></h1>

          {/* Modal */}
            <Modal show={show} onHide={handleClose}>
              {/* <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header> */}
              <Modal.Body >
            <ul className='navbar-mobile'>
              <li><a className="nav-link scrollto font-weight-bold active" href="#hero">Home</a></li>
              <li><a className="nav-link hover scrollto font-weight-bold" href="#about">About</a></li>
              <li><a className="nav-link hover scrollto font-weight-bold" href="#services">Services</a></li>
              <li><a className="nav-link hover scrollto font-weight-bold" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link hover scrollto font-weight-bold" href="#team">Team</a></li>
              <li><a className="nav-link hover scrollto font-weight-bold" href="#contact">Contact</a></li>
            </ul>            

              </Modal.Body>
              {/* <Modal.Footer>
                <button classname="btn btn-primary">Hellow</button>
              </Modal.Footer> */}
            </Modal>
          {/* Fin Del Modal */}

          <nav id="navbar" className="navbar ">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={handleShow}></i>
            
          </nav>
        
        </div>
        </header> 
     );
}
 
export default NavBar;