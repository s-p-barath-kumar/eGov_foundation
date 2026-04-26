import { useState } from "react";

const NAV_LINKS = [
  "About Us",
  "Areas of work",
  "Products & Solutions",
  "Our Platform",
  "Ecosystem",
  "Resources",
];

const HAS_DROPDOWN = ["Areas of work", "Products & Solutions", "Our Platform", "Ecosystem", "Resources"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="navbar-top-bar">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "flex-end", gap: 4 }}>
          <a href="#">Events</a>
          <a href="#">Contact us</a>
          <a href="#" style={{ fontWeight: 600 }}>🌐 ENG ▾</a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar-main">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="logo-wrap">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div>
              <span className="logo-text">eGOV</span>
              <span className="logo-sub">Foundation</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#">
                  {link}
                  {HAS_DROPDOWN.includes(link) ? " ▾" : ""}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu open">
          <button className="mobile-close" onClick={closeMenu}>✕</button>
          {[...NAV_LINKS, "Events", "Contact Us"].map((link) => (
            <a href="#" key={link} onClick={closeMenu}>{link}</a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
