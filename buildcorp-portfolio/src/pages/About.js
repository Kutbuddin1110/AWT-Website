import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div>
      <section className="about-hero">
        <h1>ABOUT US</h1>
      </section>

      <section className="about-content">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2>20+ Years of Excellence</h2>
          <p>
            Our construction company has been delivering high-quality projects for over two decades, specializing in
            residential and commercial developments.
          </p>
        </motion.div>
      </section>

      <section className="about-split">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200" alt="Office" />
        <div>
          <h2>Our Vision</h2>
          <p>We aim to redefine construction with innovation and quality, creating luxury spaces with precise attention to detail.</p>
        </div>
      </section>

      <section className="stats">
        <div>
          <h1>20+</h1>
          <p>Years Experience</p>
        </div>

        <div>
          <h1>100+</h1>
          <p>Projects Completed</p>
        </div>

        <div>
          <h1>50+</h1>
          <p>Happy Clients</p>
        </div>
      </section>
    </div>
  );
}

