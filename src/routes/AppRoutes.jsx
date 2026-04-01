import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Cartelera from "../pages/Cartelera";
import Detalle from "../pages/Detalle";
import Alimentos from "../pages/Alimentos";
import ComprarBoletos from "../pages/ComprarBoletos";
import Otros from "../pages/Otros";
import TerminosCondiciones from "../pages/TerminosCondiciones";
import AvisoPrivacidad from "../pages/AvisoPrivacidad";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/pelicula/:id" element={<Detalle />} />
        <Route path="/comprar" element={<ComprarBoletos />} />
        <Route path="/terminos" element={<TerminosCondiciones />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
