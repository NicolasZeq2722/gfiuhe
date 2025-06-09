import React from 'react';
import { Link } from 'react-router-dom';
import './Articulo1.css';

function Articulo1() {
     return (
    <>
    <header className='HeaderBu'>
            <button className='Buttons'><Link to="/PerfilPro">Volver</Link></button>
            <button className='Buttons'><Link to="/">Inicio</Link></button>
    </header>
    </>


     );
};
 
export default Articulo1;