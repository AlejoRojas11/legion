import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Route
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/Footer'; // Importa tu componente Curso1
import './styles.css';
import Course1 from './components/Courses/Course1';

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Course1" element={<Course1 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
