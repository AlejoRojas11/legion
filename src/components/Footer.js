import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'; // Importa el archivo de estilos CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          <span>&copy; 2024 Legion Club Barbería VIP. Todos los derechos reservados.</span>
          <span className="social-icons">
            Síguenos en: 
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            {' '}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
