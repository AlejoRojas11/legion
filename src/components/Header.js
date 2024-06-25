import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import './Header.css'; // Importa tu archivo CSS personalizado para estilos adicionales
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header className="header-bg py-3">
      <div className="container">
        <Navbar expand="lg" className="navbar-custom justify-content-center">
          <Navbar.Brand>
         
          </Navbar.Brand>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
