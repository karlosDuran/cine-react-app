import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { useParams, useNavigate } from "react-router-dom";
import { movies, FALLBACK_IMAGE } from "../data/data";
import { useState } from "react";

function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  // Buscar la película por id de la URL
  const pelicula = movies.find((m) => m.id === parseInt(id));

  // Si no se encuentra la película, mostrar mensaje
  if (!pelicula) {
    return (
      <PageTransition>
        <main
          style={{
            padding: "var(--space-xl) var(--space-md)",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 700,
                marginBottom: "var(--space-md)",
              }}
            >
              🎬 Película no encontrada
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                marginBottom: "var(--space-lg)",
              }}
            >
              No se encontró una película con el ID <strong>{id}</strong>.
            </p>
            <button className="btn" onClick={() => navigate("/cartelera")}>
              Ver Cartelera
            </button>
          </motion.div>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main
        style={{
          padding: "var(--space-xl) var(--space-md)",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Botón volver */}
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => navigate(-1)}
            style={{ marginBottom: "var(--space-lg)" }}
          >
            ← Volver
          </button>

          {/* Card principal del detalle */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "var(--space-lg)",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            {/* Imagen de la película */}
            <div
              style={{
                width: "100%",
                maxHeight: "500px",
                overflow: "hidden",
                background: "var(--bg-tertiary)",
              }}
            >
              <img
                src={imgError ? FALLBACK_IMAGE : pelicula.image}
                alt={pelicula.title}
                onError={() => setImgError(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Información de la película */}
            <div style={{ padding: "0 var(--space-lg) var(--space-lg)" }}>
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  fontWeight: 800,
                  marginBottom: "var(--space-sm)",
                  lineHeight: 1.2,
                }}
              >
                {pelicula.title}
              </h2>

              {/* Badges: rating, género, duración */}
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "var(--space-md)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "4px",
                    background: "var(--accent-primary)",
                    color: "white",
                  }}
                >
                  {pelicula.rating}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.08)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {pelicula.genre}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.08)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {pelicula.duration}
                </span>
              </div>

              {/* Sinopsis */}
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "var(--space-xs)",
                  color: "var(--text-primary)",
                }}
              >
                Sinopsis
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-lg)",
                }}
              >
                {pelicula.description}
              </p>

              {/* Acciones */}
              <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
                <button
                  className="btn"
                  onClick={() =>
                    navigate("/comprar", { state: { movieId: pelicula.id } })
                  }
                >
                  🎟️ Comprar Boletos
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => navigate("/cartelera")}
                >
                  Ver Cartelera
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
}

export default Detalle;
