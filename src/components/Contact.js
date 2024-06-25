import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'; // Importa el archivo CSS personalizado

const Contact = () => {
  return (
    <section id="contact" className="section py-5">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="embed-responsive embed-responsive-16by9">
              <span className="highlight-text">Donde puedes encontrarnos</span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7334036977977!2d-75.68535932546816!3d4.815773540650184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388787ceb38f73%3A0xe5e2ba791d1afe67!2sLeggion%20Club%20Barberia!5e0!3m2!1ses-419!2sco!4v1719073333344!5m2!1ses-419!2sco"
                width="600"
                height="450"
                frameBorder="0"
                className="embed-responsive-item styled-iframe"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0">
              </iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
