import { useState } from "react";
import "./Contactos.css";

export default function Contactos() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario (API, email, etc)
    setEnviado(true);
  };

  return (
    <section className="contacto">
      <h1>Contacto</h1>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mensaje:
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>¡Gracias por tu mensaje! Me pondré en contacto pronto.</p>
      )}
    </section>
  );
}
