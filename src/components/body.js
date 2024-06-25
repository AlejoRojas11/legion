import React from 'react';
import Card from 'react-bootstrap/Card';
import './Body.css'; // Importa el archivo CSS para los estilos

const Body = ({ children }) => {
  return (
    <div className="container">
      <Card className="body-card">
        <div className=''>
        <Card.Body>
          {children}
        </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Body;
