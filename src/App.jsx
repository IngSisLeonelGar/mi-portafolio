import Home from "./pages/Home";
import Contactos from "./pages/Contactos";
import Proyectos from "./pages/Proyectos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
      <section id="home">
          <Home />
        </section>
        <section id="proyectos">
          <Proyectos />
        </section>
        <section id="contactos">
          <Contactos />
        </section>
      </main>
    </>
  );
}

export default App;