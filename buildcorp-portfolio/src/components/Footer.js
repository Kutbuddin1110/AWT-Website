export default function Footer() {
  return (
    <footer style={{ padding: "1rem", textAlign: "center", borderTop: "1px solid #ddd" }}>
      <p>© {new Date().getFullYear()} The Infra Hub — Built with React.</p>
    </footer>
  );
}
