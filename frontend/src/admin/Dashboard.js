import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import api from "../api";

export default function Dashboard() {
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    api.get("/contact").then((res) => {
      setMessageCount(res.data.length || 0);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">Contact Messages: {messageCount}</div>
      </div>
    </AdminLayout>
  );
}
