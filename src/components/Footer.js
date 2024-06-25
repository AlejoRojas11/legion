// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Legion Club Barbería VIP. Todos los derechos reservados.</p>
        <p>Síguenos en: 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
          {' '}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
