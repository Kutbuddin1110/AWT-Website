import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data || []))
      .catch((err) => {
        console.error(err);
        setError("Unable to load projects");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleCardClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section>
      <h1>LATEST PROJECTS</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="grid">
        {(projects.length ? projects : [
          {id: "p1", title: "Modern Villa", location: "Seattle", description:""},
          {id: "p2", title: "Minimal City Home", location: "Austin", description:""},
          {id: "p3", title: "Luxury Estate", location: "Miami", description:""}
        ]).map((p) => (
          <div className="card" key={p.id} onClick={() => handleCardClick(p.id)} style={{ cursor: "pointer" }}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200" alt={p.title} />
            <div className="card-overlay">
              <h3>{p.title}</h3>
              <p>{p.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
