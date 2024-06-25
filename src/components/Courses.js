import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import './Hero.css'; // Importa tu archivo CSS personalizado para estilos adicionales
import { Button } from 'react-bootstrap';

const Courses = () => {
  return (
    <section id="courses" className="section">
      <div className="container">
        <h2 className="text-center mb-4">Nuestros Cursos</h2>
        <div className="video-container text-center mb-4">
          <video className="course-video" controls>
            <source src="video-intro.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <div className="text-center">
          <p className="lead">¿De qué curso deseas obtener más información?</p>
          <div className="btn-group mt-3 d-flex justify-content-center flex-wrap">
            <a href="/curseB"><Button variant="custom" className="btn-animation mb-2">Curso Básico de Barbería</Button></a>
            <a href="/curseIntermediate"><Button variant="custom" className="btn-animation mb-2">Curso Intermedio de Barbería</Button></a>
            <a href="/curseAdvanced"><Button variant="custom" className="btn-animation mb-2">Curso Avanzado de Barbería</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
