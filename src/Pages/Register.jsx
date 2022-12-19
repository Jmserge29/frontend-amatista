import Logo from '../img/binary-code.png'
import Image02 from '../img/medallo.jpg'
import axios from 'axios';
import { useState } from 'react';
import Swal from "sweetalert2";



const Register = () => {

  
      // Variables para inputs
      const[name,setName]=useState([])
      const[email,setEmail]=useState([])
      const[password,setPassword]=useState([])
      const[_userIg,setUserInstagram]=useState([])

      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    


  const RegisterUser=async (e)=>{
    // console.log(makeid(5))
    e.preventDefault();
    const codeStudent = makeid(5)
    await axios
    .post(`${Request.request}/User/signup`, {
      codeStudent,
      name,
      _userIg,
      email,
      password
    })
    .then((respuesta)  => {
      console.log(respuesta)
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
      )
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops... Lo sentimos',
        text: 'Parece ser que el usuario ingresado no existe'
      })
    });
}

    return ( 
        <main className='mainRegister'>
        <div className="box">
          <div className="inner-box">
            <div className="carousel">
              <div className="images-wrapper">
                <img src={Image02} className="image img-1 show" alt="" />
              </div>
            </div>
            <div className="forms-wrap">
              <form action="index.html"  className="sign-in-form formFormSign">
                <div className="logo text-center">
                  <img src={Logo} alt="Amatista" />
                  <h4 className='my-2'> Amatista Register</h4>
                </div>
  
                <div className="heading">
                  <h2>Hellow! Crea una cuenta</h2>
                  <h6>Podrás crear una cuenta con tu direccion de email. Estás a un paso de vivir la experiencia!  Ya tienes cuenta?</h6>
                  <a href="Login" className="toggle"> Inicia Sesión</a>
                </div>
  
                <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className='labelFormSign'>Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    value={name} onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label className='labelFormSign'>Nombre</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    value={_userIg} onChange={(e) => setUserInstagram(e.target.value)}
                    required
                  />
                  <label className='labelFormSign'>Usuario De Instagram</label>
                </div>


                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className='labelFormSign'>Password</label>
                </div>
  
                  <input type="submit" onClick={RegisterUser} value="Regístrate" className="sign-btn" />
  
                  {/* <p className="text">
                    Forgotten your password or you login datails?
                    <a href="#">Get help</a> signing in
                  </p> */}
                </div>
              </form>
  
            </div>
          </div>
        </div>
      </main>  
     );
}
 
export default Register;