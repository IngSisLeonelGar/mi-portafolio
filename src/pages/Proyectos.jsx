import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section className="proyectos">
      <h1>Mis Proyectos</h1>
      <p>Aquí puedes ver algunos de los proyectos que he desarrollado.</p>
      <ul className="proyectos-lista">
        <li>
          <a href="https://github.com/tuusuario/proyecto1" target="_blank" rel="noopener noreferrer">
            Proyecto 1 - Descripción breve
          </a>
        </li>
        <li>
          <a href="https://github.com/tuusuario/proyecto2" target="_blank" rel="noopener noreferrer">
            Proyecto 2 - Descripción breve
          </a>
        </li>
        <li>
          <a href="https://github.com/tuusuario/proyecto3" target="_blank" rel="noopener noreferrer">
            Proyecto 3 - Descripción breve
          </a>
        </li>
      </ul>
    </section>
  );
}
