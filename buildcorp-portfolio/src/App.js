import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./admin/Dashboard";
import ManageProjects from "./admin/ManageProjects";
import ViewContacts from "./admin/ViewContacts";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/projects" element={<ManageProjects />} />
        <Route path="/admin/contacts" element={<ViewContacts />} />

        <Route path="/404" element={<p style={{ padding: "1rem" }}>Page not found</p>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
