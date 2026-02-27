import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Section from "../components/Section";
import { movies } from "../data/data";
import { useNavigate, useLocation } from "react-router-dom";

const horarios = ["12:00", "14:30", "17:00", "19:30", "22:00"];

function ComprarBoletos() {
    const navigate = useNavigate();
    const location = useLocation();

    // Leer el ID de película que viene de la Cartelera (si existe)
    const movieIdFromCartelera = location.state?.movieId?.toString() || "";

    // ── Formulario controlado con useState ──
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        pelicula: movieIdFromCartelera,
        horario: "",
        cantidad: 1,
    });

    // Estado para mostrar el resumen de compra
    const [resumen, setResumen] = useState(null);

    // Estado para errores de validación
    const [errores, setErrores] = useState({});

    // ── onChange — actualizar campos del formulario ──
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "cantidad" ? parseInt(value) || 1 : value,
        }));
        // Limpiar error del campo al escribir
        if (errores[name]) {
            setErrores((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Validación
    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!formData.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
        if (!formData.email.trim()) {
            nuevosErrores.email = "El correo es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            nuevosErrores.email = "Ingresa un correo válido";
        }
        if (!formData.pelicula) nuevosErrores.pelicula = "Selecciona una película";
        if (!formData.horario) nuevosErrores.horario = "Selecciona un horario";
        if (formData.cantidad < 1 || formData.cantidad > 10)
            nuevosErrores.cantidad = "Cantidad entre 1 y 10";
        return nuevosErrores;
    };

    // ── onSubmit — enviar formulario ──
    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = validarFormulario();

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            return;
        }

        // Encontrar la película seleccionada
        const peliculaSeleccionada = movies.find(
            (m) => m.id === parseInt(formData.pelicula)
        );

        // Crear resumen de compra
        setResumen({
            nombre: formData.nombre,
            email: formData.email,
            pelicula: peliculaSeleccionada?.title || "",
            horario: formData.horario,
            cantidad: formData.cantidad,
            total: formData.cantidad * 89,
            fecha: new Date().toLocaleDateString("es-MX", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        });
    };

    // Reiniciar compra
    const nuevaCompra = () => {
        setFormData({ nombre: "", email: "", pelicula: "", horario: "", cantidad: 1 });
        setResumen(null);
        setErrores({});
    };

    return (
        <PageTransition>
            <main>
                {/* ── Hero Mini ── */}
                <div className="hero hero-mini">
                    <div
                        className="hero-bg"
                        style={{
                            backgroundImage:
                                "linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)",
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
                            🎟️ Comprar Boletos
                        </motion.h1>
                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Reserva tus lugares para la mejor experiencia cinematográfica
                        </motion.p>
                    </div>
                </div>

                <Section>
                    <AnimatePresence mode="wait">
                        {!resumen ? (
                            /* ═══════════════════════════════════════
                               FORMULARIO DE COMPRA
                               ═══════════════════════════════════════ */
                            <motion.form
                                key="formulario"
                                className="compra-form"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="form-title">Datos de compra</h2>

                                {/* Input: Nombre */}
                                <div className="form-group">
                                    <label htmlFor="nombre" className="form-label">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className={`form-input ${errores.nombre ? "input-error" : ""}`}
                                        placeholder="Ej: Juan Pérez"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                    {errores.nombre && (
                                        <span className="error-msg">{errores.nombre}</span>
                                    )}
                                </div>

                                {/* Input: Email */}
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`form-input ${errores.email ? "input-error" : ""}`}
                                        placeholder="Ej: juan@correo.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errores.email && (
                                        <span className="error-msg">{errores.email}</span>
                                    )}
                                </div>

                                {/* Select: Película — onChange */}
                                <div className="form-group">
                                    <label htmlFor="pelicula" className="form-label">
                                        Película
                                    </label>
                                    <select
                                        id="pelicula"
                                        name="pelicula"
                                        className={`form-input ${errores.pelicula ? "input-error" : ""}`}
                                        value={formData.pelicula}
                                        onChange={handleChange}
                                    >
                                        <option value="">— Selecciona una película —</option>
                                        {movies.map((m) => (
                                            <option key={m.id} value={m.id}>
                                                {m.title} ({m.genre})
                                            </option>
                                        ))}
                                    </select>
                                    {errores.pelicula && (
                                        <span className="error-msg">{errores.pelicula}</span>
                                    )}
                                </div>

                                {/* Select: Horario — onChange */}
                                <div className="form-group">
                                    <label htmlFor="horario" className="form-label">
                                        Horario
                                    </label>
                                    <select
                                        id="horario"
                                        name="horario"
                                        className={`form-input ${errores.horario ? "input-error" : ""}`}
                                        value={formData.horario}
                                        onChange={handleChange}
                                    >
                                        <option value="">— Selecciona un horario —</option>
                                        {horarios.map((h) => (
                                            <option key={h} value={h}>
                                                {h} hrs
                                            </option>
                                        ))}
                                    </select>
                                    {errores.horario && (
                                        <span className="error-msg">{errores.horario}</span>
                                    )}
                                </div>

                                {/* Input: Cantidad — onChange */}
                                <div className="form-group">
                                    <label htmlFor="cantidad" className="form-label">
                                        Cantidad de boletos
                                    </label>
                                    <input
                                        type="number"
                                        id="cantidad"
                                        name="cantidad"
                                        className={`form-input ${errores.cantidad ? "input-error" : ""}`}
                                        min="1"
                                        max="10"
                                        value={formData.cantidad}
                                        onChange={handleChange}
                                    />
                                    {errores.cantidad && (
                                        <span className="error-msg">{errores.cantidad}</span>
                                    )}
                                </div>

                                {/* Resumen previo */}
                                <div className="form-preview">
                                    <p>
                                        <strong>Total estimado:</strong>{" "}
                                        <span className="accent">${formData.cantidad * 89} MXN</span>
                                    </p>
                                    <p className="form-preview-note">
                                        Precio por boleto: $89 MXN (sala tradicional)
                                    </p>
                                </div>

                                {/* Botones */}
                                <div className="form-actions">
                                    <button type="submit" className="btn btn-lg">
                                        Confirmar Compra
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline"
                                        onClick={() => navigate("/cartelera")}
                                    >
                                        ← Volver a Cartelera
                                    </button>
                                </div>
                            </motion.form>
                        ) : (
                            /* ═══════════════════════════════════════
                               RESUMEN DE COMPRA
                               ═══════════════════════════════════════ */
                            <motion.div
                                key="resumen"
                                className="compra-resumen"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="resumen-icon">✅</div>
                                <h2 className="resumen-title">¡Compra Confirmada!</h2>
                                <p className="resumen-subtitle">
                                    Tu reservación ha sido procesada exitosamente
                                </p>

                                <div className="resumen-card">
                                    <div className="resumen-row">
                                        <span className="resumen-label">🎬 Película</span>
                                        <span className="resumen-value">{resumen.pelicula}</span>
                                    </div>
                                    <div className="resumen-row">
                                        <span className="resumen-label">🕐 Horario</span>
                                        <span className="resumen-value">{resumen.horario} hrs</span>
                                    </div>
                                    <div className="resumen-row">
                                        <span className="resumen-label">📅 Fecha</span>
                                        <span className="resumen-value">{resumen.fecha}</span>
                                    </div>
                                    <div className="resumen-row">
                                        <span className="resumen-label">🎟️ Boletos</span>
                                        <span className="resumen-value">{resumen.cantidad}</span>
                                    </div>
                                    <div className="resumen-row">
                                        <span className="resumen-label">👤 Nombre</span>
                                        <span className="resumen-value">{resumen.nombre}</span>
                                    </div>
                                    <div className="resumen-row">
                                        <span className="resumen-label">📧 Correo</span>
                                        <span className="resumen-value">{resumen.email}</span>
                                    </div>
                                    <div className="resumen-divider" />
                                    <div className="resumen-row resumen-total">
                                        <span className="resumen-label">💰 Total</span>
                                        <span className="resumen-value accent">
                                            ${resumen.total} MXN
                                        </span>
                                    </div>
                                </div>

                                <div className="form-actions">
                                    <button className="btn btn-lg" onClick={nuevaCompra}>
                                        Nueva Compra
                                    </button>
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => navigate("/")}
                                    >
                                        Ir al Inicio
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Section>

                {/* ── Footer ── */}
                <footer className="footer">
                    <p className="footer-text">© 2026 CINEMEX — LA MAGIA DEL CINE</p>
                </footer>
            </main>
        </PageTransition>
    );
}

export default ComprarBoletos;
