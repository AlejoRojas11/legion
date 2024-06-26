const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./mysqlConnection');
const cors = require('cors');

const app = express();
const port = 3000; // Cambiar el puerto a 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para permitir CORS (desarrollo)
app.use(cors());

// Endpoint para manejar el formulario
app.post('/api/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Datos del formulario recibidos:', formData);
  
    // Insertar datos en MySQL
    const sql = 'INSERT INTO contactos (nombre, email, telefono) VALUES (?, ?, ?)';
    const values = [formData.nombre, formData.email, formData.telefono];
  
    mysqlConnection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar en MySQL:', err);
        res.status(500).send('Error al guardar los datos en MySQL: ' + err.message); // Envia el mensaje de error
        return;
      }
      console.log('Datos guardados en MySQL');
      res.status(201).send('Datos guardados exitosamente en MySQL');
    });
  });