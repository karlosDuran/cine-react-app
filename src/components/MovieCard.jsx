import { useState } from "react";
import { motion } from "framer-motion";
import { FALLBACK_IMAGE } from "../data/data";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

function MovieCard({ title, image, genre, rating, duration, onVerDetalle }) {
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <motion.div
      className="card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onClick={onVerDetalle}
    >
      {/* Image wrapper con aspect-ratio 2:3 */}
      <div className="card-image-wrapper">
        {!imgError ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className="card-fallback">
            <span className="card-fallback-icon">🎬</span>
            <span className="card-fallback-text">Sin imagen</span>
          </div>
        )}

        {/* Overlay con info al hacer hover */}
        <div className="card-hover-info">
          <span className="card-hover-title">{title}</span>
          <div className="card-hover-meta">
            {rating && (
              <span className="card-hover-badge rating">{rating}</span>
            )}
            {genre && <span className="card-hover-badge">{genre}</span>}
            {duration && <span className="card-hover-badge">{duration}</span>}
          </div>
        </div>
      </div>

      {/* Info mínima debajo de la imagen */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {genre && <span className="card-genre">{genre}</span>}
      </div>
    </motion.div>
  );
}

export default MovieCard;
