
// imports 
import Logo from '../img/binary-code.png'
import Image01 from '../img/Malecon.jpg'
import axios from 'axios';
import { useState } from 'react';
import Swal from "sweetalert2";
import Cookies from 'js-cookie'
axios.defaults.withCredentials = true

const Login = () => {

  // Variables para inputs
  const[email,setEmail]=useState([])
  const[password,setPassword]=useState([])

  // Fuction by Login User
  const LoginUser=async (e)=>{
    console.log('Iniciar Sesión')
    axios.post(`${Request.request}/User/signin`,{ withCredentials: true,
    email,
    password
    }).then((respuesta)  => {
      console.log(respuesta)
      Swal.fire(
        'Bienvenido a Amatista!',
        'Disfruta lo máximo que puedas!',
        'success'
      )
      Cookies.set('code', respuesta.data.data, { expires: 7, path: '' })
      Cookies.set('Token', respuesta.data.Token, { expires: 7, path: '' })
      const obtener = Cookies.get('code')
      window.location.href = `./University/${obtener}`;
    })
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
        <main className='mainLogin'>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form  className="sign-in-form formFormSign">
              <div className="logo text-center">
                <img src={Logo} alt="Amatista" />
                <h4 className='my-2'> Amatista Login</h4>
              </div>

              <div className="heading">
                <h2>Bienvenido!</h2>
                <h6>Todavía no estás registrado? </h6>
                <a href="Register" className="toggle">Regístrate</a>
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
                    type="password"
                    className="input-field"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className='labelFormSign'>Password</label>
                </div>

                <input type="button" onClick={LoginUser} value="Iniciar Sesión" className="sign-btn" />

                {/* <p className="text">
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p> */}
              </div>
            </form>

          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src={Image01} className="image img-1 show" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>

     );
}
 
export default Login;