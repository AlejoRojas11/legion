import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Body.css';
import ContactForm from './Contact';
import CourseWidget from './CourseWidget';
import clase from './img/clase.JPG'
import bgBody from './img/bgBody.mp4'

const Body = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <main className="body-content">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="video-background"
      >
        <source src={bgBody} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <Container>
        {/* Sección de Información de la Academia */}
        <section className="my-5">
          <h2 className="text-center mb-4">Nuestra Academia de Barbería</h2>
          <Row>
            <Col md={6}>
              <p>En Leggion Academia, nos enorgullece ofrecer una experiencia única y de calidad en la industria barberil. Nuestra academia está diseñada para aquellos que desean destacarse en el apasionante mundo de la barbería, brindándoles las habilidades y conocimientos necesarios para convertirse en profesionales exitosos.</p>
            </Col>
            <Col md={6}>
              <img src={clase} alt="Academia de Barbería" className="img-fluid" />
            </Col>
          </Row>
        </section>

        {/* Nueva sección: Oportunidades de Perfeccionamiento */}
        <section className="my-5">
          <h2 className="text-center mb-4">Oportunidades de Perfeccionamiento</h2>
          <Row>
            <Col md={6}>
              <h3>Curso Básico</h3>
              <p>Si realmente quieres perfeccionarte en el corte y desvanecido de cabello masculino, te recomendamos hacer el curso básico. Este curso está dedicado completamente al desvanecido y corte de cabello de hombre. ✂️👨‍🦰</p>
            </Col>
            <Col md={6}>
              <h3>Curso Avanzado</h3>
              <p>En el curso avanzado, exploramos otros servicios en barbería como:</p>
              <ul>
                <li>Limpiezas faciales 🧖‍♂️</li>
                <li>Decoloración en barbería 💈</li>
                <li>Pigmentación de cejas y barbas con diferentes pigmentos 🎨</li>
                <li>Depilación con hilo ✨</li>
                <li>Peinados creativos 💇‍♂️</li>
              </ul>
            </Col>
          </Row>
        </section>

        {/* Nueva sección: Oportunidad de Negocio */}
        <section className="my-5">
          <h2 className="text-center mb-4">💈 ¡Las barberías son una oportunidad de negocio en auge! 💼💇‍♂️</h2>
          <h3 className="text-center">🚀 ¿CÓMO LO VAS A LOGRAR?</h3>
          <p>El curso cuenta con toda la herramienta necesaria para las prácticas, además de recursos adicionales para prácticas. Además de los siguientes módulos:</p>
          <Row>
            <Col md={4}>
              <h4>1. FUNDAMENTOS DE BARBERÍA</h4>
              <ul>
                <li>Cómo ser un barbero íntegro con valores</li>
                <li>Protocolo de atención al cliente</li>
                <li>Técnicas universales y nombramiento de cortes</li>
                <li>Estudio y anatomía del cabello</li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>2. CONCEPTOS BÁSICOS DE LA BARBERÍA</h4>
              <ul>
                <li>Visagismo</li>
                <li>Herramientas básicas</li>
                <li>Estilos de corte</li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>3. CORTES PROFESIONALES</h4>
              <ul>
                <li>Corte clásico</li>
                <li>Fade</li>
                <li>Barba</li>
              </ul>
            </Col>
          </Row>
          <p className="text-center mt-4">¡Aprenderás desde cero y sin tener que invertir inicialmente en herramienta! 💇‍♂️✂️🎉</p>
        </section>

        {/* Sección de Cursos */}
        <section className="my-5">
          <h2 className="text-center mb-4">Nuestros Cursos</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <h2 className="text-center mb-4">Curso Destacado</h2>
                <Row className="justify-content-center">
                  <Col md={8} lg={6}>
                    <CourseWidget />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Sección de Contacto */}
        <section className="my-5">
          <h2 className="text-center mb-4">Contáctanos</h2>
          <ContactForm />
        </section>
      </Container>
    </main>
  );
};

export default Body;