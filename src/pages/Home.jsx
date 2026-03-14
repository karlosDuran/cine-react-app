import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/MovieCarousel";
import FeaturedCarousel from "../components/FeaturedCarousel";
import Section from "../components/Section";
import PageTransition from "../components/PageTransition";
import { movies, FALLBACK_IMAGE } from "../data/data";
import { useNavigate } from "react-router-dom";
import heroCine from "../assets/images/hero_cine.jpg";
import palomitasImg from "../assets/images/palomitas.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Home() {
  const navigate = useNavigate();

  // Película destacada principal (la primera)
  const featured = movies[0];
  // Todas las demás películas para el carrusel
  const peliculas = movies.slice(1);

  const [featuredImgError, setFeaturedImgError] = useState(false);

  // ── useEffect + fetch: Noticias del cine desde JSONPlaceholder ──
  const [noticias, setNoticias] = useState([]);
  const [cargandoNoticias, setCargandoNoticias] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((response) => response.json())
      .then((data) => {
        // Transformar los datos del API en "noticias de cine"
        const temasCine = [
          {
            titulo: "Nuevos estrenos llegan a Cinemex este fin de semana",
            icono: "🎬",
          },
          {
            titulo: "IMAX presenta tecnología láser de nueva generación",
            icono: "🖥️",
          },
          {
            titulo: "Festival de cine independiente mexicano en salas selectas",
            icono: "🇲🇽",
          },
          {
            titulo: "Preventa exclusiva: los blockbusters más esperados de 2026",
            icono: "🎟️",
          },
        ];
        const noticiasTransformadas = data.map((post, index) => ({
          id: post.id,
          titulo: temasCine[index]?.titulo || post.title,
          contenido: post.body,
          icono: temasCine[index]?.icono || "📰",
        }));
        setNoticias(noticiasTransformadas);
        setCargandoNoticias(false);
      })
      .catch((error) => {
        console.error("Error al cargar noticias:", error);
        setCargandoNoticias(false);
      });
  }, []);

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
                `url('${heroCine}')`,
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
            DESTACADA DE LA SEMANA (Carrusel Hero)
            ═══════════════════════════════════════ */}
        <FeaturedCarousel
          movies={movies}
          onMovieClick={(id) => navigate(`/pelicula/${id}`)}
        />

        {/* ═══════════════════════════════════════
            ESTRENOS (Carrusel de películas)
            ═══════════════════════════════════════ */}
        <Section title="Estrenos">
          <MovieCarousel
            movies={peliculas.map((movie) => ({
              ...movie,
              onVerDetalle: () => navigate(`/pelicula/${movie.id}`),
            }))}
          />

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
                src={palomitasImg}
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

        {/* ═══════════════════════════════════════
            NOTICIAS DEL CINE (fetch + useEffect)
            ═══════════════════════════════════════ */}
        <Section title="Noticias del Cine">
          {cargandoNoticias ? (
            <div className="loading-container">
              <div className="loading-spinner" />
              <p className="loading-text">Cargando noticias...</p>
            </div>
          ) : (
            <motion.div
              className="noticias-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {noticias.map((noticia) => (
                <motion.div
                  key={noticia.id}
                  className="noticia-card"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="noticia-icon">{noticia.icono}</div>
                  <h3 className="noticia-title">{noticia.titulo}</h3>
                  <p className="noticia-content">{noticia.contenido}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </Section>


      </main>
    </PageTransition>
  );
}

export default Home;
