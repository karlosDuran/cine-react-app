import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Alimentos from "./pages/Alimentos";
import ComprarBoletos from "./pages/ComprarBoletos";
import Otros from "./pages/Otros";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/comprar" element={<ComprarBoletos />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
