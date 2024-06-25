import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './About.css'; // Archivo CSS para estilos personalizados

const About = () => {
  return (
    <div className="container main">
      <section id="about" className="section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Sobre Nosotros</h2>
          <Row className="mb-4 justify-content-center">
            <Col md={8} className="mb-4">
              <Card className="h-100 card-custom">
                <Card.Body>
                  <Card.Title className="text-center mb-3">Nuestra Academia</Card.Title>
                  <Card.Text>
                    <p className="card-text" >Hemos formado a numerosos barberos que han logrado destacarse en el campo.</p>
                    <div className="video-container">
                      <video className="course-video" controls>
                        <source src="video-intro.mp4" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                      </video>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default About;
