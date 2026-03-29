import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import api from "../api";

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contact").then((res) => setContacts(res.data || [])).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <AdminLayout>
      <h1>Contact Messages</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #333" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Message</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #333" }}>
              <td style={{ padding: "10px" }}>{c.name}</td>
              <td style={{ padding: "10px" }}>{c.email}</td>
              <td style={{ padding: "10px" }}>{c.message}</td>
              <td style={{ padding: "10px", fontSize: "12px", color: "#aaa" }}>
                {new Date(c.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {contacts.length === 0 && <p style={{ marginTop: "20px", color: "#aaa" }}>No messages yet</p>}
    </AdminLayout>
  );
}
