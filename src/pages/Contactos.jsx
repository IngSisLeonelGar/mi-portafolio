import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import "./Contactos.css";

export default function Contactos() {
  const form = useRef();
  const [estadoEnvio, setEstadoEnvio] = useState(null); // 'enviando', 'exito', 'error'

  function enviarEmail(e) {
    e.preventDefault();
    setEstadoEnvio('enviando');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setEstadoEnvio('exito');
          form.current.reset();
        },
      ).catch((error) => {
        console.error("Error al enviar el email:", error);
        setEstadoEnvio('error');
      });
  }


  return (
    <section className="contacto">
      <h1>Contacto</h1>
        <form ref={form} onSubmit={enviarEmail}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="user_email"
              required
            />
          </label>

          <label>
            Mensaje:
            <textarea
              name="message"
              required
            />
          </label>

          <button type="submit"> {estadoEnvio === 'enviando' ? 'Enviando...' : 'Enviar'}</button>
        </form>
        {estadoEnvio === 'exito' && <p style={{ color: 'green' }}>Mensaje enviado ✅</p>}
        {estadoEnvio === 'error' && <p style={{ color: 'red' }}>Hubo un error ❌</p>}
    </section>
  );
}