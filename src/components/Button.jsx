/**
 * Button — Componente reutilizable de botón.
 *
 * Props:
 *   text     (string)   — Texto que muestra el botón.
 *   onClick  (function) — Acción al hacer clic.
 *   variant  (string)   — "primary" (default) | "outline" | "secondary"
 *   size     (string)   — "sm" | "lg" | undefined (normal)
 *   type     (string)   — "button" (default) | "submit" | "reset"
 *   children (node)     — Contenido alternativo al texto (íconos, etc.)
 */
function Button({ text, onClick, variant, size, type = "button", children }) {
  // Construir la lista de clases CSS a partir de las props
  const classes = [
    "btn",
    variant === "outline" && "btn-outline",
    variant === "secondary" && "btn-secondary",
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children || text}
    </button>
  );
}

export default Button;