import { useState } from "react";
import AdminLayout from "./AdminLayout";
import api from "../api";

export default function ManageProjects() {
  const [project, setProject] = useState({ title: "", location: "", description: "" });
  const [status, setStatus] = useState("");

  const addProject = async () => {
    try {
      await api.post("/projects", project);
      setStatus("Added!");
      setProject({ title: "", location: "", description: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to add project.");
    }
  };

  return (
    <AdminLayout>
      <h1>Manage Projects</h1>
      <div className="form">
        <input value={project.title} placeholder="Title" onChange={(e) => setProject({ ...project, title: e.target.value })} />
        <input value={project.location} placeholder="Location" onChange={(e) => setProject({ ...project, location: e.target.value })} />
        <textarea value={project.description} placeholder="Description" onChange={(e) => setProject({ ...project, description: e.target.value })} />
        <button onClick={addProject}>Add Project</button>
      </div>
      <p>{status}</p>
    </AdminLayout>
  );
}
