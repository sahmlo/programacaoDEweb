import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo / Nome da Farmácia */}
        <Link to="/" className="logo">
          <span>Farmácia Popular</span>
        </Link>

        {/* Navegação */}
        <nav className="nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/servicos" className="nav-link">Serviços</NavLink>
          <NavLink to="/sobre" className="nav-link">Sobre Nós</NavLink>
          <NavLink to="/fale-conosco" className="nav-link">Fale Conosco</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;