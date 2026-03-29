import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Home() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => {
        // Get first 2 projects for the home page showcase
        setProjects(res.data.slice(0, 2) || []);
      })
      .catch((err) => {
        console.error(err);
        setProjects([]);
      })
      .finally(() => setLoading(false));
  }, []);

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
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="project-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => navigate(`/projects/${p.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img src={p.image || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200"} alt={p.title} />
                <div className="card-overlay">
                  <h3>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
