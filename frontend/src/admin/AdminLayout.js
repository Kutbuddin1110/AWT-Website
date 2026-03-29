import { Link } from "react-router-dom";
import "./admin.css";

export default function AdminLayout({ children }) {
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/";
  };

  return (
    <div className="admin">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/contacts">Contacts</Link>
        <button 
          onClick={handleLogout}
          style={{
            display: "block",
            marginTop: "40px",
            padding: "10px 0",
            color: "#aaa",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "left",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => e.target.style.color = "#fff"}
          onMouseLeave={(e) => e.target.style.color = "#aaa"}
        >
          Logout
        </button>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}
