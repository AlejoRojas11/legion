// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import Testimonials from './components/Testimonials';
import Instructors from './components/Instructors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';
import './components/fontAwesome';
import body from './components/body'

const App = () => {
  return (
    <div>
      <Header />
      <body>
        
         <Hero />
        <About />
        
        
        <Testimonials />
        <Instructors />
        <Contact />
        <Footer />
      </body>
    </div>
  );
};

export default App;
