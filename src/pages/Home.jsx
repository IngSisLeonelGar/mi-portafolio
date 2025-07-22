import "./Home.css";
import { Link } from "react-router-dom";  // <--- Importa Link

export default function Home() {
    return(
        <section className="home">
            <h1>Hola mi nombre es Leonel Jancarlos Garcia Flores</h1>
            <p>soy desarrollador Full-Stack y este es mi Portafolio</p>
            <Link to="/proyectos" className="btn">
                Ver proyectos
            </Link>
        </section>
    );
}