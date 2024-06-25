import React from 'react';
import './CurseB.css';

const CurseB = () => {
  return (
    <div className="curseb-container">
      <h2 className="curseb-header">Curso Básico de Barbería</h2>
      <div className="curseb-content">
        <div className="curseb-section">
          <h3 className="curseb-header">Descripción del Curso</h3>
          <p>
            El curso básico de barbería está diseñado para aquellos que desean 
            iniciar su carrera en el mundo de la barbería. Aprenderás las 
            técnicas fundamentales, el uso correcto de las herramientas y los 
            principios de la atención al cliente.
          </p>
        </div>
        <div className="curseb-section">
          <h3 className="curseb-header">Contenido del Curso</h3>
          <ul>
            <li>Historia y evolución de la barbería</li>
            <li>Introducción a las herramientas de barbería</li>
            <li>Técnicas básicas de corte de cabello</li>
            <li>Principios de afeitado y arreglo de barba</li>
            <li>Higiene y esterilización</li>
            <li>Atención al cliente y gestión del tiempo</li>
          </ul>
        </div>
        <div className="curseb-section">
          <h3 className="curseb-header">Duración y Horarios</h3>
          <p>
            El curso tiene una duración de 8 semanas, con clases prácticas y 
            teóricas dos veces por semana. Los horarios son flexibles para 
            adaptarse a tus necesidades.
          </p>
        </div>
        <div className="curseb-section">
          <h3 className="curseb-header">Certificación</h3>
          <p>
            Al finalizar el curso, recibirás un certificado de barbería que te 
            permitirá comenzar a trabajar en el campo de la barbería y seguir 
            perfeccionando tus habilidades.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurseB;
