import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import CollectionsUniversity from './Pages/CollectionsUniversity';
import PerfilUser from './Pages/PerfilUser';
import APIPages from './Pages/APIPages'
import IsotopeLab from './Pages/IsotopeLab';
import Spotify from './Pages/Spotify';
import CollectionMaterias from './Pages/CollectionsMaterias';
import CollectionTasks from './Pages/CollectionTasks';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CookiesUninorte from './Pages/CookiesUninorte';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/University/:id" element={<CollectionsUniversity />} />
        <Route path="/User" element={<PerfilUser />} />
        <Route path="/APIPages" element={<APIPages />} />
        <Route path="/Lab" element={<IsotopeLab />} />
        <Route path="/Spotify" element={<Spotify />} />
        <Route path="/Materias/:id" element={<CollectionMaterias />} />
        <Route path="/Tasks/:id" element={<CollectionTasks />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/CookiesUninorte" element={<CookiesUninorte/>} />

      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
