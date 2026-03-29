import { Link } from "react-router-dom";
import "./admin.css";

export default function AdminLayout({ children }) {
  return (
    <div className="admin">
      <aside className="sidebar">
        <h2>BuildCorp</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/projects">Projects</Link>
        <Link to="/admin/contacts">Contacts</Link>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}
