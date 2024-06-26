import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '', // Asegúrate de que el nombre del campo coincida con la columna en la base de datos
    email: '',
    telefono: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/submit-form', formData);
      console.log(response.data); // Manejar la respuesta del servidor según sea necesario
      // Aquí puedes redirigir o mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Manejar el error (mostrar un mensaje al usuario, etc.)
    }
  };

  return (
    <section id="contact" className="section py-5">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="border-primary custom-card">
              <Card.Body className="bg-white shadow">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu correo electrónico"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ingresa tu teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Button className="custom-button" type="submit">
                    Inscribirse
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
