import React from 'react';
import './Hero.css';
import Courses from './Courses';

const Hero = () => {
  return (
    <section className="hero text-center py-5">
      <div className="hero-overlay"></div>
      <div className="container">
        <h2 className="display-4 mb-4 southland-font">Bienvenidos a Legion Club Barbería VIP</h2>
        <p className="lead mb-4">Transformando estilos, transformando vidas.</p>
        <div className="video-container mb-4">
          <div className="courses-container">
            <Courses />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
