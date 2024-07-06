import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './img/escudo negro.png'

const Header = () => {
  return (
    <header className="header-bg">
      <div className="header-content">
        <Container className="d-flex justify-content-center align-items-center h-100">
          <Navbar.Brand className="d-flex flex-column align-items-center">
            <img
              src={logo}
              className="logo-img img-fluid mb-2"
              alt="Logo"
            />
            <span className="fw-bold text-center logo-text" id='Name'>Legion Club Academia</span>
          </Navbar.Brand>
        </Container>
      </div>
    </header>
  );
};

export default Header;