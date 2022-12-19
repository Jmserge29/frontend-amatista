import React from 'react';
import axios from 'axios';
import Request from '../env/requests';

axios.defaults.withCredentials = true

const CookiesUninorte = () => {

    const createCookie = () => {
        axios.get(`${Request.request}/createCookie`,{ withCredentials: true }).then((res) =>{
          console.log(res.data)
        })
      }
      const deleteCookie = () => {
        axios.get(`${Request.request}/deleteCookie`,{ withCredentials: true }).then((res) =>{
          console.log(res.data)
        })
      }
    return ( 
        <div className="App">
            <h1>HTTP ONLY COOKIE DEMO</h1>
                <div className="">
                    <button className=" btn-success" onClick={createCookie}>Create Cookies</button>
                    <button className=" btn-warning">Renew Cookies</button>
                    <button className=" btn-danger" onClick={deleteCookie}>Delete Cookie</button>
                </div>
        </div>
    );
}
 
export default CookiesUninorte;