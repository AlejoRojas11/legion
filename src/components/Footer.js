import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contáctanos</h5>
            <p>Teléfono: +123 456 7890</p>
            <p>Email: info@barberia.com</p>
            <p>Dirección: Calle Principal, Ciudad</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Inicio</a></li>
              <li><a href="#" className="text-light">Cursos</a></li>
              <li><a href="#" className="text-light">Sobre Nosotros</a></li>
              <li><a href="#" className="text-light">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Síguenos</h5>
            <div className="social-icons">
              <a href="https://facebook.com/tubarberiapage" className="text-light me-3"><FaFacebook size={30} /></a>
              <a href="https://instagram.com/tubarberia" className="text-light me-3"><FaInstagram size={30} /></a>
              <a href="https://wa.me/1234567890" className="text-light"><FaWhatsapp size={30} /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Tu Barbería. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;