import { motion } from "framer-motion";
import MovieCard from "../components/MovieCard";
import Section from "../components/Section";
import PageTransition from "../components/PageTransition";
import { movies } from "../data/data";
import { useNavigate } from "react-router-dom";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

function Cartelera() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <main>
        {/* ── Hero Mini ── */}
        <div className="hero hero-mini">
          <div
            className="hero-bg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80')",
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

        {/* ── All Movies Grid ── */}
        <Section>
          <motion.div
            className="grid-container"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {movies.map((movie) => (
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

        {/* ── Footer ── */}
        <footer className="footer">
          <p className="footer-text">© 2026 CINEMEX — LA MAGIA DEL CINE</p>
        </footer>
      </main>
    </PageTransition>
  );
}

export default Cartelera;
