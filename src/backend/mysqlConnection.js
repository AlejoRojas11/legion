// mysqlConnection.js

const mysql = require('mysql2');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto por la dirección de tu servidor MySQL
  user: 'root', // Cambia esto por tu usuario de MySQL
  password: '', // Cambia esto por tu contraseña de MySQL
  database: 'legion' // Cambia esto por el nombre de tu base de datos en MySQL
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida correctamente');
});

// Manejo de errores de conexión
connection.on('error', (err) => {
  console.error('Error de conexión a MySQL:', err);
});

module.exports = connection;
