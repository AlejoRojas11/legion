import React from 'react';
import './Hero.css'; 
import Courses from './Courses'

const Hero = () => {
  return (
    <section className="hero text-center py-5">
      <div className="hero-overlay"></div>
      <div className="container">
        <h2 className="display-4 mb-4 southland-font">Bienvenidos a Legion Club Barbería VIP</h2>
        <p className="lead mb-4">Transformando estilos, transformando vidas.</p>
        <div className="video-container mb-4">

        <Courses />
          {/* <video autoPlay muted loop className="hero-video">
            <source src="/ruta/al/video.mp4" type="video/mp4" />
          
            Tu navegador no soporta video HTML5.
          </video> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
