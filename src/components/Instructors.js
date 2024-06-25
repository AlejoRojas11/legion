import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import './Instructors.css'; // Importa tu archivo CSS personalizado para estilos adicionales
/* import instructor1 from '../images/instructor1.jpg'; // Importa la imagen del instructor 1 desde la carpeta de assets
import instructor2 from '../images/instructor2.jpg'; // Importa la imagen del instructor 2 desde la carpeta de assets
import instructor3 from '../images/instructor3.jpg'; // Importa la imagen del instructor 3 desde la carpeta de assets
*/
const Instructors = () => {
  return (
    <section id="instructors" className="section bg-light">
      <div className="container py-5">
        <h2 className="text-center mb-5">Instructores</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              {/* <img src={instructor1} className="card-img-top" alt="Instructor 1" /> */}
              <div className="card-body">
                <h3 className="card-title">Instructor 1</h3>
                <p className="card-text">Descripción del Instructor 1...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              {/* <img src={instructor2} className="card-img-top" alt="Instructor 2" /> */}
              <div className="card-body">
                <h3 className="card-title">Instructor 2</h3>
                <p className="card-text">Descripción del Instructor 2...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              {/* <img src={instructor3} className="card-img-top" alt="Instructor 3" /> */}
              <div className="card-body">
                <h3 className="card-title">Instructor 3</h3>
                <p className="card-text">Descripción del Instructor 3...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
