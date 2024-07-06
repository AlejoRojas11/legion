import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCalendar, FaClock, FaDollarSign } from 'react-icons/fa';
/* import courseImage from './path-to-your-image.jpg'; */
import './Body.css'; // Asegúrate de tener una imagen

const CourseWidget = () => {
  return (
    <Card className="course-widget text-center">
     {/*  */}
      <Card.Body>
        <Card.Title className="widget-title">Curso Avanzado de Barbería</Card.Title>
        <Card.Text className="widget-subtitle">¡Inscríbete ahora y lleva tus habilidades al siguiente nivel!</Card.Text>
        
        <div className="widget-info">
          <p><FaCalendar /> Inicio: 30 de julio</p>
          <p><FaClock /> Horario: Martes, 3 - 7 P.M.</p>
          <p><FaDollarSign /> Costo: 600.000 pesos</p>
        </div>
        
        <div className="widget-payment-options">
          <p>Opciones de pago:</p>
          <ul>
            <li>Pago de contado</li>
            <li>4 cuotas de 150.000 pesos</li>
          </ul>
        </div>
        
        <Button variant="primary" size="lg" className="widget-button">
          ¡Asegura tu lugar ahora!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseWidget;