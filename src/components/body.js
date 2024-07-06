import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Body.css';
import ContactForm from './Contact'; 
import CourseWidget from './CourseWidget'; // Importa el componente del formulario
import { Link } from 'react-router-dom';

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

        <section className="my-5">
  <h2 className="text-center mb-4">Curso Destacado</h2>
  <Row className="justify-content-center">
    <Col md={8} lg={6}>
      <CourseWidget />
    </Col>
  </Row>
</section>
        {/* Sección de Cursos */}
        <section className="my-5">
          <h2 className="text-center mb-4">Nuestros Cursos</h2>
          <Row>
      {/* Primera tarjeta */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/path-to-course-image1.jpg" />
          <Card.Body>
            <Card.Title>Nombre del Curso 1</Card.Title>
            <Card.Text>Breve descripción del curso 1...</Card.Text>

              <Button variant="primary">Más información</Button>

          </Card.Body>
        </Card>
      </Col>

      {/* Segunda tarjeta */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/path-to-course-image2.jpg" />
          <Card.Body>
            <Card.Title>Nombre del Curso 2</Card.Title>
            <Card.Text>Breve descripción del curso 2...</Card.Text>

            <Button variant="primary">Más información</Button>

          </Card.Body>
        </Card>
      </Col>

      {/* Tercera tarjeta */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/path-to-course-image3.jpg" />
          <Card.Body>
            <Card.Title>Nombre del Curso 3</Card.Title>
            <Card.Text>Breve descripción del curso 3...</Card.Text>
            
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
        <section className="my-5">
          <h2 className="text-center mb-4">Contáctanos</h2>
          <ContactForm /> {/* Usa el componente del formulario aquí */}
        </section>
    


export default Body;
      </Container>
    </main>
  );
};

export default Body;