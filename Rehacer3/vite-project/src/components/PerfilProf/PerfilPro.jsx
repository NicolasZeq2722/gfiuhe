import React from 'react';
import { Link } from 'react-router-dom';
import './PerfilPro.css';

function PerfilPro() {
  return (
    <>
    <header>
      <div className='Cabec'>
        <h1 className='Titulo'>
          WORKABLE
        </h1>
        <div className='Botones'>
          <button className='Login'>
            <Link to="/Login">Login</Link>
          </button>
          <button className='IniciSesion'>
            <Link to="/SignUp">Iniciar sesion</Link>
          </button>
        </div>
      </div>
    </header>

    <nav className='SeccionTitu'>
      <h2>
        Desarrollo profesional
      </h2>
    </nav>

    <section className='Articulo'>
      <h3>
        Que llevar a una entrevista de trabajo
      </h3>
      <p>
        Asistir a una entrevista de trabajo bien preparado puede marcar la diferencia entre causar una excelente impresión o quedar en el olvido. No solo se trata de vestirse adecuadamente y conocer la empresa, sino también de llevar ciertos elementos clave que pueden ayudarte a destacarte como candidato. A continuación, te presentamos una lista con los artículos esenciales que debes llevar a una entrevista de trabajo.
      </p>
      <div className='Img1'></div>
    </section>


    <section className='Articulo2'>
      <h4>
        Articulos mas leidos
      </h4>
      <div className='img1'></div>
      <div className='img1'></div>
      <div className='img1'></div>
    </section>

    <section className='Articulo3'>
      <h5>
        Recursos y plantillas
      </h5>
      <p>Consejos, ejemplos y modelos para conseguir que tus postulaciones destaquen</p>
      <div className='SeccionTxt'>
        <p>Encuentra consejos prácticos, ejemplos reales de CVs y cartas de presentación exitosas, además de modelos y plantillas personalizables para optimizar tus documentos y captar la atención de los equipos reclutadores</p>
        <button>Palabras clave en un CV</button>
        <button>Carta de presentacion</button>
        <button>Hacer un CV exitoso</button>
        <button>Objetivos profesionales</button>
      </div>
    </section>



    <section>

    </section>
    </>
  )
}

export default PerfilPro;
