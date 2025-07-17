import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Contactos from "./pages/Contactos";
import Proyectos from "./pages/Proyectos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Proyectos" element={<Proyectos/>} />
        <Route path="/contactos" element={<Contactos/>} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;