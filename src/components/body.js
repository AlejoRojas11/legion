import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Body.css";
import ContactForm from "./Contact";
import CourseWidget from "./CourseWidget";
import clase from "./img/clase.JPG";
import bgBody from "./img/bgBody.mp4";
import { Link } from "react-router-dom";

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
            NUESTRA <span className="module-number">ACADEMIA </span> DE BARBERIA
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

        {/* SECCION DE CURSOS*/}
        <section className="my-5">
          <h2 className="text-center mb-4">
            {" "}
            <span className="module-number">CURSOS</span> DE
            LEGION ACADEMIA
          </h2>
          <Row>
          <Container>
  <Row>
    <Col md={4}>
      <h3>Curso Básico</h3>
      <p>
        <strong>📚 Estructura del Curso:</strong><br />
        <strong>📅 Total:</strong> 12 clases
        <ul>
          <li>📝 3 clases teóricas</li>
          <li>🛠️ 9 clases prácticas</li>
        </ul>
        <strong>📘 Distribución:</strong><br />
        Las 3 clases teóricas se distribuyen a lo largo del curso. Al final, se lleva a cabo un examen práctico.<br />
        <strong>🏆 Certificación:</strong>
        <ul>
          <li>Si pasas el examen, recibirás un <strong className="certificado">certificado de aprobación</strong>.</li>
          <li>Si no lo pasas, el profesor puede ofrecerte una <strong>habilitación</strong>.</li>
          <li>En caso de no aprobar el curso, recibirías un <strong>certificado de asistencia</strong>.</li>
        </ul>
        ¡Estamos aquí para apoyarte en cada paso del camino! 🌟
      </p>
      <Link to='/Course1' className="text-decoration-none">
      <Button variant="primary">Deseas saber todo sobre el curso</Button>
      </Link>
    </Col>

    <Col md={4}>
      <h3>Curso Intermedio</h3>
      <p>
        <strong>📚 Estructura del Curso:</strong><br />
        <strong>📅 Total:</strong> 15 clases
        <ul>
          <li>📝 5 clases teóricas</li>
          <li>🛠️ 10 clases prácticas</li>
        </ul>
        <strong>📘 Distribución:</strong><br />
        Las clases teóricas y prácticas se distribuyen a lo largo del curso, incluyendo trabajos en grupo y estudios de caso.<br />
        <strong>🏆 Certificación:</strong>
        <ul>
          <li>Examen teórico y práctico al finalizar el curso.</li>
          <li>Certificado de aprovechamiento al aprobar los exámenes.</li>
          <li>Certificado de participación si no apruebas.</li>
        </ul>
        ¡Tu avance es nuestro objetivo! 🚀
      </p>
      <Link to='/Course2' className="text-decoration-none">
      <Button variant="primary">Deseas saber todo sobre el curso</Button>
      </Link>
    </Col>

    <Col md={4}>
      <h3>Curso Avanzado</h3>
      <p>
        En el curso avanzado, exploramos otros servicios en barbería como:
      </p>
      <ul>
        <li>🧖‍♂️ Limpiezas faciales</li>
        <li>💈 Decoloración en barbería</li>
        <li>🎨 Pigmentación de cejas y barbas con diferentes pigmentos</li>
        <li>✨ Depilación con hilo</li>
        <li>💇‍♂️ Peinados creativos</li>
      </ul>
      <p>
        <strong>🏆 Certificación:</strong><br />
        Al finalizar, se realiza un proyecto final evaluado por profesionales del sector.<br />
        Certificado de especialista en barbería avanzada.
      </p>
      <Link to='/Course3' className="text-decoration-none">
      <Button variant="primary">Deseas saber todo sobre el curso</Button>
      </Link>
    </Col>
  </Row>
</Container>
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
