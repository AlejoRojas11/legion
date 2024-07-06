// src/App.js
import React from 'react';
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/Footer';
import './styles.css';



const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Body />
      </main>
     
      
      
       
      <Footer/>
     
   
      
    </div>
  );
};

export default App;