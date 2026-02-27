import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "../components/MovieCard";
import Section from "../components/Section";
import PageTransition from "../components/PageTransition";
import { movies } from "../data/data";
import { useNavigate } from "react-router-dom";
import promoCine from "../assets/images/promo_cine.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// Función para barajar un array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Cartelera() {
  const navigate = useNavigate();

  // ── Orden aleatorio cada vez que se entra a la página ──
  const moviesShuffled = useMemo(() => shuffleArray(movies), []);

  // ── useState #1: Lista de películas favoritas ──
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (movieId) => {
    setFavoritos((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  // ── useState #2: Mostrar/ocultar descripción ──
  const [descripcionVisible, setDescripcionVisible] = useState({});

  const toggleDescripcion = (movieId) => {
    setDescripcionVisible((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  // ── onChange: Filtro por género ──
  const [generoFiltro, setGeneroFiltro] = useState("Todos");

  // Extraer géneros únicos de las películas
  const generos = ["Todos", ...new Set(movies.map((m) => m.genre))];

  const peliculasFiltradas =
    generoFiltro === "Todos"
      ? moviesShuffled
      : moviesShuffled.filter((m) => m.genre === generoFiltro);

  // Películas favoritas para mostrar al final
  const peliculasFavoritas = movies.filter((m) => favoritos.includes(m.id));

  return (
    <PageTransition>
      <main>
        {/* ── Hero Mini ── */}
        <div className="hero hero-mini">
          <div
            className="hero-bg"
            style={{
              backgroundImage: `url('${promoCine}')`,
            }}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Cartelera
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Descubre los estrenos y películas en exhibición
            </motion.p>
          </div>
        </div>

        {/* ── Controles: Filtro por género + Contador de favoritos ── */}
        <Section>
          <div className="cartelera-controls">
            {/* onChange — Filtro por género */}
            <div className="filter-group">
              <label htmlFor="genre-filter" className="filter-label">
                🎭 Filtrar por género:
              </label>
              <select
                id="genre-filter"
                className="filter-select"
                value={generoFiltro}
                onChange={(e) => setGeneroFiltro(e.target.value)}
              >
                {generos.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Contador de favoritos */}
            <div className="favorites-counter">
              <span className="favorites-icon">❤️</span>
              <span className="favorites-count">
                {favoritos.length} {favoritos.length === 1 ? "favorita" : "favoritas"}
              </span>
            </div>
          </div>
        </Section>

        {/* ── Grid de Películas con favoritos y descripción toggle ── */}
        <Section>
          <motion.div
            className="cartelera-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {peliculasFiltradas.map((movie) => (
                <motion.div
                  key={movie.id}
                  className="cartelera-movie-card"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Imagen del poster */}
                  <div className="cartelera-movie-poster">
                    <img src={movie.image} alt={movie.title} loading="lazy" />
                    {/* Botón favorito — onClick */}
                    <button
                      className={`fav-btn ${favoritos.includes(movie.id) ? "fav-active" : ""
                        }`}
                      onClick={() => toggleFavorito(movie.id)}
                      title={
                        favoritos.includes(movie.id)
                          ? "Quitar de favoritos"
                          : "Agregar a favoritos"
                      }
                    >
                      {favoritos.includes(movie.id) ? "❤️" : "🤍"}
                    </button>
                  </div>

                  {/* Info de la película */}
                  <div className="cartelera-movie-info">
                    <h3 className="cartelera-movie-title">{movie.title}</h3>
                    <div className="cartelera-movie-meta">
                      <span className="meta-badge accent">{movie.rating}</span>
                      <span className="meta-badge">{movie.genre}</span>
                      <span className="meta-badge">{movie.duration}</span>
                    </div>

                    {/* Botón toggle descripción — onClick */}
                    <button
                      className="btn-toggle-desc"
                      onClick={() => toggleDescripcion(movie.id)}
                    >
                      {descripcionVisible[movie.id]
                        ? "Ocultar sinopsis ▲"
                        : "Ver sinopsis ▼"}
                    </button>

                    {/* Descripción con animación */}
                    <AnimatePresence>
                      {descripcionVisible[movie.id] && (
                        <motion.p
                          className="cartelera-movie-desc"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {movie.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Botón comprar */}
                    <button
                      className="btn btn-sm"
                      onClick={() => navigate("/comprar", { state: { movieId: movie.id } })}
                      style={{ marginTop: "var(--space-xs)" }}
                    >
                      🎟️ Comprar boletos
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Section>

        {/* ── Sección de Favoritos ── */}
        <AnimatePresence>
          {peliculasFavoritas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Section title="⭐ Mis Películas Favoritas">
                <motion.div
                  className="grid-container"
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  {peliculasFavoritas.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      image={movie.image}
                      genre={movie.genre}
                      rating={movie.rating}
                      duration={movie.duration}
                      onVerDetalle={() => navigate("/detalle")}
                    />
                  ))}
                </motion.div>
              </Section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Footer ── */}
        <footer className="footer">
          <p className="footer-text">© 2026 CINEMEX — LA MAGIA DEL CINE</p>
        </footer>
      </main>
    </PageTransition>
  );
}

export default Cartelera;
