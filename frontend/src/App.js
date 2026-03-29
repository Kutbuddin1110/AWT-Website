import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ViewContacts from "./admin/ViewContacts";
import "./App.css";

// Protected route component
function ProtectedAdminRoute({ element }) {
  const isAuthenticated = localStorage.getItem("adminAuth") === "true";
  return isAuthenticated ? element : <Navigate to="/admin/login" replace />;
}

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

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedAdminRoute element={<Dashboard />} />} />
        <Route path="/admin/contacts" element={<ProtectedAdminRoute element={<ViewContacts />} />} />

        <Route path="/404" element={<p style={{ padding: "1rem" }}>Page not found</p>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
