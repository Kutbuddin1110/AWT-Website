import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="logo">The Infra Hub</div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>
      {menuOpen && (
        <div className="overlay active" onClick={closeMenu}></div>
      )}
    </>
  );
}
