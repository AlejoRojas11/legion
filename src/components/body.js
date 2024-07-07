import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Body.css";
import ContactForm from "./Contact";
import CourseWidget from "./CourseWidget";
import clase from "./img/clase.JPG";
import bgBody from "./img/bgBody.mp4";

const Body = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
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
          <h2 className="text-center mb-4">
            Nuestra <span className="module-number">Academia</span> de Barbería
          </h2>

          <Row>
            <Col md={6}>
              <p>
                En Leggion Academia, nos enorgullece ofrecer una experiencia
                única y de calidad en la industria barberil. Nuestra academia
                está diseñada para aquellos que desean destacarse en el
                apasionante mundo de la barbería, brindándoles las habilidades y
                conocimientos necesarios para convertirse en profesionales
                exitosos.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={clase}
                alt="Academia de Barbería"
                className="img-fluid"
              />
            </Col>
          </Row>
        </section>

        {/* Nueva sección: Oportunidades de Perfeccionamiento */}
        <section className="my-5">
          <h2 className="text-center mb-4">
            {" "}
            <span className="module-number"> Oportunidades</span> de
            Perfeccionamiento
          </h2>
          <Row>
            <Col md={6}>
              <h3>Curso Básico</h3>
              <p>
                Si realmente quieres perfeccionarte en el corte y desvanecido de
                cabello masculino, te recomendamos hacer el curso básico. Este
                curso está dedicado completamente al desvanecido y corte de
                cabello de hombre. ✂️👨‍🦰
              </p>
            </Col>
            <Col md={6}>
              <h3>Curso Avanzado</h3>
              <p>
                En el curso avanzado, exploramos otros servicios en barbería
                como:
              </p>
              <ul>
                <li>
                  <span className="list-dot">•</span> Limpiezas faciales 🧖‍♂️
                </li>
                <li>
                  <span className="list-dot">•</span> Decoloración en barbería
                  💈
                </li>
                <li>
                  <span className="list-dot">•</span> Pigmentación de cejas y
                  barbas con diferentes pigmentos 🎨
                </li>
                <li>
                  <span className="list-dot">•</span> Depilación con hilo ✨
                </li>
                <li>
                  <span className="list-dot">•</span> Peinados creativos 💇‍♂️
                </li>
              </ul>
            </Col>
          </Row>
        </section>

        {/* Nueva sección: Oportunidad de Negocio */}
        <section className="my-5">
          <h2 className="text-center mb-4">
            💈 ¡Las barberías son una oportunidad de negocio en auge! 💼💇‍♂️
          </h2>
          <h3 className="text-center">🚀 ¿CÓMO LO VAS A LOGRAR?</h3>
          <p>
            El curso cuenta con toda la herramienta necesaria para las
            prácticas, además de recursos adicionales para prácticas. Además de
            los siguientes módulos:
          </p>
          <Row>
            <Col md={4}>
              <h4>
                <span className="module-number">1.</span> FUNDAMENTOS DE
                BARBERÍA
              </h4>
              <ul>
                <li>
                  <span className="list-dot">•</span> Cómo ser un barbero
                  íntegro con valores
                </li>
                <li>
                  <span className="list-dot">•</span> Protocolo de atención al
                  cliente
                </li>
                <li>
                  <span className="list-dot">•</span> Técnicas universales y
                  nombramiento de cortes
                </li>
                <li>
                  <span className="list-dot">•</span> Estudio y anatomía del
                  cabello
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>
                <span className="module-number">2.</span> CONCEPTOS BÁSICOS DE
                LA BARBERÍA
              </h4>
              <ul>
                <li>
                  <span className="list-dot">•</span> Visagismo
                </li>
                <li>
                  <span className="list-dot">•</span> Herramientas básicas
                </li>
                <li>
                  <span className="list-dot">•</span> Estilos de corte
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>
                <span className="module-number">3.</span> CORTES PROFESIONALES
              </h4>
              <ul>
                <li>
                  <span className="list-dot">•</span> Corte clásico
                </li>
                <li>
                  <span className="list-dot">•</span> Fade
                </li>
                <li>
                  <span className="list-dot">•</span> Barba
                </li>
              </ul>
            </Col>
          </Row>
          <p className="text-center mt-4">
            ¡Aprenderás desde cero y sin tener que invertir inicialmente en
            herramienta! 💇‍♂️✂️🎉
          </p>
        </section>

        {/* Sección de Cursos */}
        <section className="my-5">
          <h2 className="text-center mb-4">Nuestros Cursos</h2>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <CourseWidget />
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
