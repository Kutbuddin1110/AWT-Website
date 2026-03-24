import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    api
      .get(`/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => {
        console.error(err);
        // Fallback demo project
        setProject({
          id: id,
          title: "Modern Luxury Villa",
          location: "Seattle, Washington",
          description: "A stunning contemporary villa featuring cutting-edge architecture and premium finishes throughout.",
          type: "Residential",
          year: "2023",
          area: "8,500 sq ft",
          status: "Completed",
          details: [
            "5 Bedrooms, 4.5 Bathrooms",
            "Smart Home Integration",
            "Infinity Pool & Spa",
            "Private Wine Cellar",
            "Home Theater System",
            "Solar Energy System"
          ]
        });
      });
  }, [id]);

  if (!project) return <p style={{ padding: "2rem" }}>Loading project...</p>;

  return (
    <div className="project-detail">
      {/* HERO */}
      <section className="detail-hero">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600"
          alt={project.title}
        />
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{project.title}</h1>
          <p className="location">📍 {project.location}</p>
        </motion.div>
      </section>

      {/* KEY INFO */}
      <section className="project-info">
        <div className="info-grid">
          <div className="info-card">
            <span className="label">Project Type</span>
            <p>{project.type || "Residential"}</p>
          </div>
          <div className="info-card">
            <span className="label">Completion Year</span>
            <p>{project.year || "2023"}</p>
          </div>
          <div className="info-card">
            <span className="label">Total Area</span>
            <p>{project.area || "8,500 sq ft"}</p>
          </div>
          <div className="info-card">
            <span className="label">Status</span>
            <p>{project.status || "Completed"}</p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="description-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </motion.div>
      </section>

      {/* FEATURES */}
      {project.details && (
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {project.details.map((detail, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="feature-icon">✓</div>
                <p>{detail}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* GALLERY */}
      <section className="gallery-section">
        <h2>Project Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200" alt="Gallery 1" />
          <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200" alt="Gallery 2" />
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200" alt="Gallery 3" />
          <img src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=1200" alt="Gallery 4" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Interested in This Project?</h2>
        <p>Let's discuss how we can bring your vision to life.</p>
        <button className="cta-button">GET IN TOUCH</button>
      </section>
    </div>
  );
}
