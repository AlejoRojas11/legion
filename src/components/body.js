import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Body.css';

const Body = () => {
  return (
    <main className="body-content">
      <Container>
        {/* Sección de Información de la Academia */}
        <section className="my-5">
          <h2 className="text-center mb-4">Nuestra Academia de Barbería</h2>
          <Row>
            <Col md={6}>
              <p>Descripción detallada de la academia, sus objetivos y metodología...</p>
            </Col>
            <Col md={6}>
              <img src="/path-to-academy-image.jpg" alt="Academia de Barbería" className="img-fluid" />
            </Col>
          </Row>
        </section>

        {/* Sección de Cursos */}
        <section className="my-5">
          <h2 className="text-center mb-4">Nuestros Cursos</h2>
          <Row>
            {/* Repetir esta Card para cada curso */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/path-to-course-image.jpg" />
                <Card.Body>
                  <Card.Title>Nombre del Curso</Card.Title>
                  <Card.Text>Breve descripción del curso...</Card.Text>
                  <Button variant="primary">Más información</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Sección de Videos Testimoniales */}
        <section className="my-5">
          <h2 className="text-center mb-4">Testimonios</h2>
          <Row>
            {/* Repetir este Col para cada video */}
            <Col md={6} className="mb-4">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VIDEO_ID" allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
        </section>

        {/* Formulario de Contacto */}
        <section className="my-5">
          <h2 className="text-center mb-4">Contáctanos</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Ingresa tu número de teléfono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </section>
      </Container>
    </main>
  );
};

export default Body;