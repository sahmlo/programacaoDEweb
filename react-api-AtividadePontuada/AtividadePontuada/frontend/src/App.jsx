import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes globais
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import SobreNos from './pages/SobreNos'; // sua pasta se chama "AboutUs"
import ContactUs from './pages/ContactUs';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
