import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple password check (set to "admin123" - can be changed)
    const ADMIN_PASSWORD = "admin123";
    
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <section style={{ minHeight: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <h1>Admin Access</h1>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          background: "rgba(255,255,255,0.1)",
          backdrop: "blur(10px)",
          padding: "30px",
          borderRadius: "10px"
        }}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginBottom: "15px",
              padding: "12px",
              border: "none",
              background: "#eee",
              borderRadius: "6px",
              fontSize: "14px"
            }}
            required
          />
          <button
            type="submit"
            style={{
              background: "#222",
              color: "white",
              padding: "12px",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "transform 0.3s ease",
              fontSize: "14px"
            }}
          >
            Access Admin Panel
          </button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </form>
      </div>
    </section>
  );
}
