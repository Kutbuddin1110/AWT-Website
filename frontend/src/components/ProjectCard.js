import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: 8, marginBottom: "0.8rem" }}>
      <h3>{project.title}</h3>
      <p><strong>Location:</strong> {project.location}</p>
      <p>{project.description}</p>
      <Link to={`/projects/${project.id}`} style={{ color: "#0066cc" }}>View detail</Link>
    </article>
  );
}
