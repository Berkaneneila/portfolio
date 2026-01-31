"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ activeLink = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => () => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const closeOnNavigate = () => setMenuOpen(false);

  const isHome = activeLink === "home";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {isHome ? (
          <button type="button" className="brand" onClick={scrollTo("top")}>
            <span className="brand-logo-text">N<span className="brand-logo-accent">eila</span></span>
            <span className="brand-dot" aria-hidden />
          </button>
        ) : (
          <Link href="/" className="brand brand-link">
            <span className="brand-logo-text">N<span className="brand-logo-accent">eila</span></span>
            <span className="brand-dot" aria-hidden />
          </Link>
        )}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {isHome ? (
            <>
              <button type="button" className="nav-link" onClick={scrollTo("top")}>Home</button>
              <Link href="/education" className="nav-link" onClick={closeOnNavigate}>Experience</Link>
              <Link href="/projects" className="nav-link" onClick={closeOnNavigate}>Projects</Link>
              <button type="button" className="nav-link" onClick={scrollTo("skills")}>Achievements</button>
              <Link href="/contact" className="nav-link" onClick={closeOnNavigate}>Contact</Link>
            </>
          ) : (
            <>
              <Link href="/" className={`nav-link ${activeLink === "home" ? "nav-link-active" : ""}`} onClick={closeOnNavigate}>Home</Link>
              {activeLink === "experience" ? (
                <span className="nav-link nav-link-active">Experience</span>
              ) : (
                <Link href="/education" className="nav-link" onClick={closeOnNavigate}>Experience</Link>
              )}
              {activeLink === "projects" ? (
                <span className="nav-link nav-link-active">Projects</span>
              ) : (
                <Link href="/projects" className="nav-link" onClick={closeOnNavigate}>Projects</Link>
              )}
              <Link href="/#skills" className="nav-link" onClick={closeOnNavigate}>Achievements</Link>
              {activeLink === "contact" ? (
                <span className="nav-link nav-link-active">Contact</span>
              ) : (
                <Link href="/contact" className="nav-link" onClick={closeOnNavigate}>Contact</Link>
              )}
            </>
          )}
        </nav>
        <Link href="/contact" className="primary-button nav-cta">
          Hire me
        </Link>
        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
        </button>
      </div>
    </header>
  );
}
