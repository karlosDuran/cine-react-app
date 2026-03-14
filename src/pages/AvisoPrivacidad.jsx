import { motion } from "framer-motion";

function AvisoPrivacidad() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Hero */}
            <section className="hero hero-mini">
                <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200')" }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Aviso de <span className="accent">Privacidad</span></h1>
                    <p className="hero-subtitle">Protección de datos personales de nuestros usuarios</p>
                </div>
            </section>

            {/* Contenido */}
            <section className="section container legal-content">
                <h2 className="section-title">Aviso de Privacidad Integral</h2>

                <div className="legal-block">
                    <h3>Responsable del Tratamiento</h3>
                    <p>
                        Cadena Mexicana de Exhibición S.A. de C.V. (en adelante "Cinemex"), con domicilio en
                        la Ciudad de México, es responsable del tratamiento de sus datos personales conforme a
                        la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>Datos Personales Recabados</h3>
                    <p>
                        Para las finalidades señaladas, Cinemex podrá recabar las siguientes categorías de datos
                        personales: nombre completo, fecha de nacimiento, correo electrónico, número telefónico,
                        y datos de pago (procesados por proveedores seguros de terceros). No se recaban datos
                        personales sensibles.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>Finalidades del Tratamiento</h3>
                    <p>
                        Sus datos personales serán utilizados para: completar transacciones de compra de boletos,
                        enviar confirmaciones y recibos, gestionar su cuenta de usuario, ofrecer promociones
                        personalizadas (previo consentimiento), y dar cumplimiento a obligaciones legales aplicables.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>Derechos ARCO</h3>
                    <p>
                        Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus
                        datos personales (Derechos ARCO). Para ejercer estos derechos, puede enviar su solicitud
                        al correo: privacidad@cinemex.com, o directamente en cualquiera de nuestras sucursales
                        presentando una identificación oficial vigente.
                    </p>
                </div>

                <div className="legal-block">
                    <h3>Transferencia de Datos</h3>
                    <p>
                        Cinemex no compartirá sus datos personales con terceros sin su consentimiento, salvo en
                        los casos previstos por la legislación aplicable o cuando sea necesario para la prestación
                        del servicio (procesadores de pago, proveedores de envío de correo electrónico).
                    </p>
                </div>

                <div className="legal-update">
                    Última actualización: Marzo 2026
                </div>
            </section>
        </motion.main>
    );
}

export default AvisoPrivacidad;
