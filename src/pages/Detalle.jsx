import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router-dom";

function Detalle() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <main style={{ padding: "var(--space-xl) var(--space-md)", maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => navigate(-1)}
            style={{ marginBottom: "var(--space-lg)" }}
          >
            ← Volver
          </button>

          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "var(--space-lg)",
            }}
          >
            Detalle de Película
          </h2>

          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-lg)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              Selecciona una película de la cartelera para ver su sinopsis, horarios y más información.
            </p>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
}

export default Detalle;
