import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600"
          alt="house"
          className="hero-img"
        />

        <div className="overlay" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>TIME TO MEET YOUR</h3>
          <h1>NEW HOME</h1>
          <button onClick={() => navigate("/projects")}>EXPLORE PROJECTS</button>
        </motion.div>
      </section>

      <section className="offer">
        <h1>WHAT WE OFFER</h1>
        <div className="offer-items">
          <div>
            <h3>Experienced Team</h3>
            <p>We have 20+ years of experience in construction.</p>
          </div>
          <div>
            <h3>Quality Work</h3>
            <p>We ensure top-notch craftsmanship.</p>
          </div>
          <div>
            <h3>Future Vision</h3>
            <p>Modern and innovative designs.</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h1>LATEST PROJECT</h1>
        <div className="project-grid">
          <div className="project-card" onClick={() => navigate("/projects/p1")} style={{ cursor: "pointer" }}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200" alt="project" />
            <div className="card-overlay">
              <h3>Modern Villa</h3>
            </div>
          </div>
          <div className="project-card" onClick={() => navigate("/projects/p2")} style={{ cursor: "pointer" }}>
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200" alt="project" />
            <div className="card-overlay">
              <h3>City Minimalist</h3>
            </div>
          </div>
          <div className="project-card" onClick={() => navigate("/projects/p3")} style={{ cursor: "pointer" }}>
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200" alt="project" />
            <div className="card-overlay">
              <h3>Luxury Residence</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
