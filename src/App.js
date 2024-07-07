import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Route
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/Footer'; // Importa tu componente Curso1
import './styles.css';
import Course1 from './components/Courses/Course1';
import Course2 from './components/Courses/Course2';
import Course3 from './components/Courses/Course3';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Course1" element={<Course1 />} />
            <Route path="/Course2" element={<Course2 />} />
            <Route path="/Course3" element={<Course3 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
