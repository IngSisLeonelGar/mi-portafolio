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
        <li><a href="#home" onClick={CerrarMenu}>Inicio</a></li>
        <li><a href="#proyectos" onClick={CerrarMenu}>Proyectos</a></li>
        <li><a href="#contactos" onClick={CerrarMenu}>Contacto</a></li>
      </ul>

      <div className="hamburguesa" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
    </header>
    
  );
}
