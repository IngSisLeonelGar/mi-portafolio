import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section className="proyectos">
      <h1>Mis Proyectos</h1>
      <p>Aquí puedes ver algunos de los proyectos que he desarrollado.</p>
      <ul className="proyectos-lista">
        <li>
          <a href="https:agenda-contactos-ochre.vercel.app
" target="_blank" rel="noopener noreferrer">
            Proyecto Agenda-Contactos
          </a>
        </li>
        <li>
          <a href="https:" target="_blank" rel="noopener noreferrer">
            Proyecto 2 - Descripción breve
          </a>
        </li>
        <li>
          <a href="https:" target="_blank" rel="noopener noreferrer">
            Proyecto 3 - Descripción breve
          </a>
        </li>
      </ul>
    </section>
  );
}
