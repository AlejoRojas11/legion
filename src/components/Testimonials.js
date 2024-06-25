import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="text-center mb-4">Testimonios</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Excelente academia, aprendí mucho!" - Juan Pérez</p>
                <video className="card-img-top" controls>
                  <source src="testimonial1.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
