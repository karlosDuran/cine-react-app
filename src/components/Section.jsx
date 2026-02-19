import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

function Section({ title, children, id }) {
  return (
    <motion.section
      id={id}
      className="container section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </motion.section>
  );
}

export default Section;
