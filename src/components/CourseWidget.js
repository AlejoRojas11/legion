import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCalendar, FaClock, FaDollarSign, FaWhatsapp } from 'react-icons/fa';
import './Widget.css';
import Estu from './img/Estudiantes.JPG'
import Tijeras from './img/Tijeras.JPG'
import bgwidget from './img/bgWidget.jpg'

const CourseWidget = ({ title, subtitle, details, price, paymentOptions, buttonText, whatsappLink, backgroundImage }) => {
  return (
    <Card className="course-widget" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Card.Body>
        <Card.Title className="widget-title">{title}</Card.Title>
        <Card.Subtitle className="widget-subtitle">{subtitle}</Card.Subtitle>
        <div className="widget-info">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
        <p><FaDollarSign /> Costo: {price} pesos</p>
        <div className="widget-payment-options">
          <p>Opciones de pago:</p>
          <ul>
            {paymentOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
        {whatsappLink ? (
          <Button href={whatsappLink} target="_blank"  className="widget-button">
            <FaWhatsapp /> {buttonText}
          </Button>
        ) : (
          <Button variant="primary" className="widget-button">{buttonText}</Button>
        )}
      </Card.Body>
    </Card>
  );
};

const BodyComponent = () => {
  return (
    <div className="course-widgets-container">
      <CourseWidget
        title="Curso de Barbería"
        subtitle="Formación profesional en barbería"
        details={[
          "Inicio: 30 de julio",
          "Horario: Martes, 3 - 7 P.M."
        ]}
        price="600.000"
        paymentOptions={[
          "Pago de contado",
          "4 cuotas de 150.000 pesos"
        ]}
        buttonText="¡Asegura tu lugar ahora!"
        backgroundImage={Estu}
      />
      <CourseWidget
        title="Curso Avanzado de Barbería"
        subtitle="Perfecciona tus habilidades"
        details={[
          "Duración: 3 meses",
          "Cupos: 8 por curso"
        ]}
        price="650.000"
        paymentOptions={[
          "Pago de contado: 650.000 pesos",
          "4 cuotas (Primera cuota de 165.000 para separar cupo)"
        ]}
        buttonText="¡Contáctanos por WhatsApp!"
        whatsappLink="https://wa.me/p/7278206612262167/573234263937"
        backgroundImage={bgwidget}
      />
      <CourseWidget
  title="Masterclass de Barbería"
  subtitle="Técnicas avanzadas para profesionales"
  details={[
    "Corte con tijera avanzado",
    "Perfeccionamiento de corte",
    "Diferentes tipos de texturas",
    "Diseños de tribales pigmentados",
    "Depilación de cera y depilación con hilo",
    "Limpieza facial",
    "Colorimetría en barbería",
    "Moldeo y peinados",
    "Técnicas avanzadas para cortes limpios, precisos y a otro nivel"
  ]}
  price="700.000"
  paymentOptions={[
    "Consulta opciones de pago"
  ]}
  buttonText="¡Más información por WhatsApp!"
  whatsappLink="https://wa.me/p/8273969339283758/573234263937"
  backgroundImage={Tijeras}
/>
    </div>
  );
};

export default BodyComponent;