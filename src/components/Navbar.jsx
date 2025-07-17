import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Portafolio</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/contactos">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
