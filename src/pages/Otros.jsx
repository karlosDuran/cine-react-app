import { motion } from "framer-motion";
import Section from "../components/Section";
import PageTransition from "../components/PageTransition";
import { promotions, memberships, formats } from "../data/data";
import promoFamilia from "../assets/images/promo_familia.jpg";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

function Otros() {
  return (
    <PageTransition>
      <main>
        {/* ── Hero Mini ── */}
        <div className="hero hero-mini">
          <div
            className="hero-bg"
            style={{
              backgroundImage:
                `url('${promoFamilia}')`,
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
              Más <span className="accent">Cinemex</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Promociones, membresías y formatos especiales
            </motion.p>
          </div>
        </div>

        {/* ── Promociones ── */}
        <Section title="Promociones" id="promos">
          <motion.div
            className="promo-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {promotions.map((promo) => (
              <motion.div
                key={promo.id}
                className="promo-card"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                <div
                  className="promo-card-bg"
                  style={{ backgroundImage: `url(${promo.bgImage})` }}
                />
                <div className="promo-card-overlay" />
                <div className="promo-card-content">
                  <span className="promo-badge">{promo.badge}</span>
                  <div className="promo-icon">{promo.icon}</div>
                  <h3 className="promo-card-title">{promo.title}</h3>
                  <p className="promo-card-desc">{promo.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <div className="container">
          <div className="divider" />
        </div>

        {/* ── Membresías ── */}
        <Section title="Membresías" id="membresias">
          <motion.div
            className="membership-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {memberships.map((membership) => (
              <motion.div
                key={membership.id}
                className="membership-card"
                variants={fadeInUp}
                style={{ "--card-accent": membership.accent }}
                whileHover={{ y: -4 }}
              >
                <div className="membership-icon">{membership.icon}</div>
                <span className="membership-tier">{membership.tier}</span>
                <h3 className="membership-title">{membership.title}</h3>
                <p className="membership-desc">{membership.description}</p>
                <ul className="membership-benefits">
                  {membership.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <button className="btn btn-outline btn-sm">
                  Más información
                </button>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <div className="container">
          <div className="divider" />
        </div>

        {/* ── Formatos Especiales ── */}
        <Section title="Formatos Especiales" id="formatos">
          <motion.div
            className="format-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {formats.map((format) => (
              <motion.div
                key={format.id}
                className="format-card"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <div className="format-icon">{format.icon}</div>
                <h3 className="format-name">{format.name}</h3>
                <p className="format-desc">{format.description}</p>
              </motion.div>
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

export default Otros;
