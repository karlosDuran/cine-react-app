import { motion } from "framer-motion";

function TerminosCondiciones() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Hero */}
            <section className="hero hero-mini">
                <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?w=1200')" }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Términos y <span className="accent">Condiciones</span></h1>
                    <p className="hero-subtitle">Condiciones generales de uso del servicio Cinemex</p>
                </div>
            </section>

            {/* Contenido */}
            <section className="section container legal-content">
                <h2 className="section-title">Condiciones Generales</h2>

                <div className="legal-block">
                    <h3>1. Uso del Servicio</h3>
                    <p>
                        Al acceder y utilizar el sitio web de Cinemex, el usuario acepta cumplir con los presentes
                        Términos y Condiciones. El servicio está destinado exclusivamente para uso personal y no
                        comercial. Cualquier uso indebido del sitio podrá resultar en la suspensión del acceso.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>2. Compra de Boletos</h3>
                    <p>
                        La compra de boletos a través de la plataforma está sujeta a disponibilidad. Una vez
                        confirmada la compra, el usuario recibirá un código QR o número de confirmación que
                        deberá presentar en taquilla. No se realizan devoluciones una vez completada la
                        transacción, salvo en los casos previstos por la ley.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>3. Conducta en Salas</h3>
                    <p>
                        Cinemex se reserva el derecho de negar el acceso o solicitar el retiro de cualquier
                        persona que altere el orden dentro de las instalaciones. Está prohibido el ingreso de
                        alimentos y bebidas externas, así como la grabación parcial o total de las proyecciones.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>4. Propiedad Intelectual</h3>
                    <p>
                        Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos, videos y diseño
                        gráfico, es propiedad de Cadena Mexicana de Exhibición S.A. de C.V. o de sus
                        licenciantes. Queda prohibida su reproducción, distribución o modificación sin
                        autorización previa por escrito.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>5. Limitación de Responsabilidad</h3>
                    <p>
                        Cinemex no será responsable por interrupciones del servicio, errores en la plataforma o
                        daños derivados del uso del sitio web. El usuario utiliza el servicio bajo su propia
                        responsabilidad. La programación de películas y horarios está sujeta a cambios sin
                        previo aviso.
                    </p>
                </div>

                <div className="legal-update">
                    Última actualización: Marzo 2026
                </div>
            </section>
        </motion.main>
    );
}

export default TerminosCondiciones;
