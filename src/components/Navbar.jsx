import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const CerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header>
    <nav className="navbar">
      <div className="navbar-logo">Mi Portafolio</div>
      <ul className={`navbar-links ${menuAbierto ? "activo" : ""}`}>
        <li><Link to="/" onClick={CerrarMenu}>Inicio</Link></li>
        <li><Link to="/proyectos" onClick={CerrarMenu}>Proyectos</Link></li>
        <li><Link to="/pontactos" onClick={CerrarMenu}>Contacto</Link></li>
      </ul>
      <div className="hamburguesa" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
    </header>
    
  );
}
