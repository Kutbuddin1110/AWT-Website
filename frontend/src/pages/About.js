import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div>

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-overlay" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT US
        </motion.h1>
      </section>

      {/* INTRO */}
      <section className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>20+ Years of Excellence</h2>
          <p>
            For over two decades, we have been shaping skylines and building
            spaces that redefine modern living. Our expertise spans residential,
            commercial, and luxury developments — each project crafted with
            precision, innovation, and an uncompromising commitment to quality.
          </p>
        </motion.div>
      </section>

      {/* SPLIT SECTION */}
      <section className="about-split">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200"
          alt="Construction"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Our Vision</h2>
          <p>
            We aim to redefine construction through innovation, sustainability,
            and timeless design. Every project reflects our dedication to
            creating spaces that are not only functional but inspiring.
          </p>
        </motion.div>
      </section>

      {/* DARK PREMIUM SECTION */}
      <section className="about-dark">
        <div className="dark-content">
          <h2>Built on Trust & Precision</h2>
          <p>
            Our legacy is built on strong relationships, transparency, and
            delivering beyond expectations. We collaborate closely with clients
            to transform ideas into iconic structures.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h3>Years Experience</h3>
          <h1>20+</h1>
        </div>

        <div>
          <h3>Projects Completed</h3>
          <h1>100+</h1>
        </div>

        <div>
          <h3>Happy Clients</h3>
          <h1>50+</h1>
        </div>
      </section>

    </div>
  );
}