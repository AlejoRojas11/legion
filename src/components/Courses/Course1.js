import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCalendar, FaTrophy, FaGift, FaMoneyBillWave, FaCertificate, FaUserFriends } from 'react-icons/fa';
import './Course1.css';

function Course1() {
  return (
<Container className="course-container">
      <h1 className="course-title">Curso Profesional de Barbería</h1>

      <section className="course-section">
        <h2><FaCalendar /> <span className="module-number">Estructura</span> del Curso</h2>
        <Row>
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <h3>Distribución de Clases</h3>
                <ul>
                  <li><span className="list-dot">•</span> <strong>Total:</strong> 12 clases</li>
                  <li><span className="list-dot">•</span> <strong>Teóricas:</strong> 3 clases</li>
                  <li><span className="list-dot">•</span> <strong>Prácticas:</strong> 9 clases</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <h3>Evaluación</h3>
                <p><span className="list-dot">•</span> Al final del curso, se realiza un examen práctico.</p>
                <p><span className="list-dot">•</span> <FaTrophy /> Al aprobar, recibirás un certificado de aprobación.</p>
                <p><span className="list-dot">•</span> <FaCertificate /> En caso de no aprobar, obtendrás un certificado de asistencia.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>


      <section className="course-section">
        <h2><FaGift /> Beneficios Incluidos</h2>
        <Card className="info-card">
          <Card.Body>
            <Row>
              <Col md={6}>
                <h3>Insumos proporcionados</h3>
                <ul>
                  <li>Guantes de protección</li>
                  <li>Cuelleros profesionales</li>
                  <li>Herramientas de trabajo (máquinas, peines, etc.)</li>
                </ul>
              </Col>
              <Col md={6}>
                <h3>Extras</h3>
                <p>Recibirás una camiseta exclusiva de la academia Leggion.</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </section>

      <section className="course-section">
        <h2><FaMoneyBillWave /> Inversión y Opciones de Pago</h2>
        <Row>
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <h3>Costo del Curso</h3>
                <p><strong>Precio total:</strong> 550.000 pesos</p>
                <p><strong>Pago de contado:</strong> 500.000 pesos (¡ahorra 50.000!)</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <h3>Plan de Pagos</h3>
                <p>Opción a crédito: 4 cuotas de 140.000 pesos mensuales</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="course-section">
        <h2><FaUserFriends /> Programa de Referidos</h2>
        <Card className="info-card highlight-card">
          <Card.Body>
            <p>Por cada amigo que refieras y se inscriba, recibirás un bono de 50.000 pesos.</p>
          </Card.Body>
        </Card>
      </section>

      <Card className="info-card support-card">
        <Card.Body>
          <h2 className="text-center">¡Estamos aquí para apoyarte en cada paso del camino! 🌟</h2>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Course1;