import AdminLayout from "./AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">Projects: 12</div>
        <div className="card">Messages: 25</div>
      </div>
    </AdminLayout>
  );
}
