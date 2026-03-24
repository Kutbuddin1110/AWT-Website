import { useState } from "react";
import api from "../api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await api.post("/contact", form);
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="contact">
      <div>
        <h1>CONTACT US</h1>
        <p>Reach out to us for your next project.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input value={form.name} placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input value={form.email} placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea value={form.message} placeholder="Message" required onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button type="submit">SUBMIT</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
