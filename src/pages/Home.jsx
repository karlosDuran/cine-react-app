import { useState } from "react";
import { motion } from "framer-motion";
import MovieCard from "../components/MovieCard";
import Section from "../components/Section";
import PageTransition from "../components/PageTransition";
import { movies, FALLBACK_IMAGE } from "../data/data";
import { useNavigate } from "react-router-dom";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Home() {
  const navigate = useNavigate();

  // Película destacada principal (la primera)
  const featured = movies[0];
  // Preview de cartelera (las siguientes 4)
  const carteleraPreview = movies.slice(1, 5);
  // Resto de películas para grid secundario
  const moreMovies = movies.slice(5);

  const [featuredImgError, setFeaturedImgError] = useState(false);

  return (
    <PageTransition>
      <main>
        {/* ═══════════════════════════════════════
            HERO SECTION
            ═══════════════════════════════════════ */}
        <div className="hero">
          <div
            className="hero-bg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80')",
            }}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              La Magia del
              <span className="accent">Cine</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              Experiencias cinematográficas extraordinarias
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{ display: "flex", gap: "var(--space-sm)" }}
            >
              <button
                className="btn btn-lg"
                onClick={() => navigate("/cartelera")}
              >
                Ver Cartelera
              </button>
              <button
                className="btn btn-outline btn-lg"
                onClick={() => navigate("/otros")}
              >
                Promociones
              </button>
            </motion.div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            PELÍCULA DESTACADA (Featured)
            ═══════════════════════════════════════ */}
        <Section title="Destacada de la Semana">
          <motion.div
            className="featured-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate("/detalle")}
          >
            <div className="featured-card-bg">
              <img
                src={featuredImgError ? FALLBACK_IMAGE : featured.image}
                alt={featured.title}
                onError={() => setFeaturedImgError(true)}
              />
            </div>
            <div className="featured-card-overlay" />
            <div className="featured-card-content">
              <span className="featured-label">⭐ Destacada de la semana</span>
              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-desc">{featured.description}</p>
              <div className="featured-meta">
                <span className="featured-badge accent">{featured.rating}</span>
                <span className="featured-badge">{featured.genre}</span>
                <span className="featured-badge">{featured.duration}</span>
              </div>
              <div className="featured-actions">
                <button
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/detalle");
                  }}
                >
                  Comprar boletos
                </button>
                <button
                  className="btn btn-outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/detalle");
                  }}
                >
                  Ver trailer
                </button>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* ═══════════════════════════════════════
            EN CARTELERA (Grid de películas)
            ═══════════════════════════════════════ */}
        <Section title="En Cartelera">
          <motion.div
            className="grid-container"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {carteleraPreview.map((movie) => (
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

          {/* Películas adicionales */}
          {moreMovies.length > 0 && (
            <motion.div
              className="grid-container mt-md"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {moreMovies.map((movie) => (
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
          )}

          <div className="text-center mt-lg">
            <button
              className="btn btn-outline"
              onClick={() => navigate("/cartelera")}
            >
              Ver Cartelera Completa
            </button>
          </div>
        </Section>

        {/* ═══════════════════════════════════════
            DULCERÍA — separada pero integrada
            ═══════════════════════════════════════ */}
        <div className="dulceria-separator">
          <Section title="Dulcería">
            <motion.div
              className="food-hero-banner"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/alimentos")}
            >
              <img
                src="https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=1920&q=80"
                alt="Dulcería Cinemex"
                loading="lazy"
              />
              <div className="food-hero-overlay">
                <h3 className="food-hero-title">
                  Completa tu{" "}
                  <span style={{ color: "var(--accent-primary)" }}>
                    experiencia
                  </span>
                </h3>
                <p className="food-hero-subtitle">
                  Palomitas, snacks y bebidas premium para disfrutar al máximo
                </p>
                <div style={{ marginTop: "var(--space-sm)" }}>
                  <span className="btn btn-sm">Ver menú</span>
                </div>
              </div>
            </motion.div>
          </Section>
        </div>

        {/* ── Footer ── */}
        <footer className="footer">
          <p className="footer-text">© 2026 CINEMEX — LA MAGIA DEL CINE</p>
        </footer>
      </main>
    </PageTransition>
  );
}

export default Home;
