import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import './Hero.css'; // Importa tu archivo CSS personalizado para estilos adicionales
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el icono de WhatsApp

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
          <div className="progress" style={{ height: '25px', marginBottom: '20px' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
              CUPOS DISPONIBLES...
            </div>
          </div>
          <div className="text-center mb-4">
            <a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <Button className="btn-whatsapp animate__animated animate__pulse animate__infinite">
                <FaWhatsapp className="mr-2" /> Más información
              </Button>
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className='text2'>¿De qué curso deseas obtener más información?</p>
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
