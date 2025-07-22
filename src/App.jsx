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
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path="/pontactos" element={<Contactos/>}/>
      </Routes>
      </main>
    </Router>
  );
}

export default App;