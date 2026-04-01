import { motion } from "framer-motion";
import Section from "../components/Section";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import { foods } from "../data/data";
import alimentosHero from "../assets/images/alimentos_hero.png";
import palomitasImg from "../assets/images/palomitas.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function FoodCard({ name, image, price }) {
  return (
    <motion.div className="food-card" variants={cardVariants} whileHover={{ y: -4 }}>
      <img src={image} alt={name} loading="lazy" />
      <div className="food-card-content">
        <h3 className="food-card-name">{name}</h3>
        <p className="food-card-price">{price}</p>
        <Button text="Agregar" size="sm" />
      </div>
    </motion.div>
  );
}

function Alimentos() {
  return (
    <PageTransition>
      <main>
        {/* ── Hero Mini ── */}
        <div className="hero hero-mini">
          <div
            className="hero-bg"
            style={{
              backgroundImage:
                `url('${palomitasImg}')`,
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
              Dulcería
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Snacks y bebidas para la experiencia completa
            </motion.p>
          </div>
        </div>

        {/* ── Banner Horizontal 21:9 con imagen local ── */}
        <div className="container">
          <motion.div
            className="food-hero-banner"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={alimentosHero}
              alt="Experiencia Dulcería Cinemex"
            />
            <div className="food-hero-overlay">
              <h3 className="food-hero-title">
                Sabores que
                <span style={{ color: "var(--accent-primary)" }}> inspiran</span>
              </h3>
              <p className="food-hero-subtitle">
                Desde palomitas artesanales hasta combos exclusivos, cada bocado es parte del show.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bebidas ── */}
        <Section title="Bebidas" id="bebidas">
          <motion.div
            className="grid-container"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {foods.bebidas.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </motion.div>
        </Section>

        {/* ── Comestibles ── */}
        <Section title="Comestibles" id="comestibles">
          <motion.div
            className="grid-container"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {foods.comestibles.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </motion.div>
        </Section>

        {/* ── Snacks ── */}
        <Section title="Snacks" id="snacks">
          <motion.div
            className="grid-container"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {foods.snacks.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </motion.div>
        </Section>

      </main>
    </PageTransition>
  );
}

export default Alimentos;
