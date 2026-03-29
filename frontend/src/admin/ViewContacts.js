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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
