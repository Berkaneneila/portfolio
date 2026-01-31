"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const PROJECTS = [
  {
    id: 1,
    title: "Elegant",
    type: "website",
    initial: "E",
    description: "Discover our curated collection of elegant furniture and home decor that transforms your space into a sanctuary of style and comfort.",
    role: "Full Stack Developer",
    tech: ["React", "Next.js", "E-Commerce"],
    websiteUrl: "https://project-ecommerces.vercel.app/",
    githubUrl: null,
    status: "Completed",
  },
  {
    id: 2,
    title: "TrainSight",
    type: "website",
    initial: "T",
    description: "AI-powered fitness platform with real-time coaching for form correction, progress tracking, and personalized training plans.",
    role: "Full Stack Developer, UI/UX",
    tech: ["React", "Next.js", "AI"],
    websiteUrl: "https://tswebsitess.vercel.app/",
    githubUrl: null,
    status: "Completed",
  },
  {
    id: 3,
    title: "Orbital Defender",
    type: "python",
    initial: "O",
    description: "Reinforcement Learning with a custom Gymnasium environment and algorithm comparison. Semester ML project.",
    role: "AI / ML",
    tech: ["Python", "Gymnasium", "Reinforcement Learning", "A2C"],
    websiteUrl: null,
    githubUrl: "https://github.com/mariloubgt/RL-Custom-Environment2",
    status: "Completed",
  },
  {
    id: 4,
    title: "Churn Classification",
    type: "python",
    initial: "C",
    description: "Classification of churn algorithms for customer retention analysis. Data preprocessing, model training, and evaluation pipelines.",
    role: "AI / Data",
    tech: ["Python", "Scikit-learn", "Pandas"],
    websiteUrl: null,
    githubUrl: "https://github.com/Berkaneneila",
    status: "Completed",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all"); // "all" | "website" | "python"

  const filtered = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  return (
    <div className="page-wrapper">
      <Navbar activeLink="projects" />

      <main>
        <section className="section-block projects-page-section">
          <h1 className="projects-page-title">Projects</h1>
          <p className="projects-page-subtitle">
            A showcase of my work — web applications and Python projects built with modern technologies.
          </p>

          <div className="projects-page-filters">
            <button
              type="button"
              className={`projects-filter-btn ${filter === "all" ? "projects-filter-active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              type="button"
              className={`projects-filter-btn ${filter === "website" ? "projects-filter-active" : ""}`}
              onClick={() => setFilter("website")}
            >
              Websites
            </button>
            <button
              type="button"
              className={`projects-filter-btn ${filter === "python" ? "projects-filter-active" : ""}`}
              onClick={() => setFilter("python")}
            >
              Python
            </button>
          </div>

          <div className="projects-page-grid">
            {filtered.map((project) => (
              <article key={project.id} className="projects-page-card">
                <div className="projects-page-card-header">
                  <div className="projects-page-icon">
                    <span>{project.initial}</span>
                  </div>
                  <span className={`projects-page-status projects-page-status-${project.status === "Completed" ? "done" : "dev"}`}>
                    {project.status}
                  </span>
                </div>
                <h2 className="projects-page-card-title">{project.title}</h2>
                <p className="projects-page-card-desc">{project.description}</p>
                {project.role && (
                  <p className="projects-page-card-role">Role: {project.role}</p>
                )}
                <div className="projects-page-card-tags">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="projects-page-card-actions">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="projects-page-btn projects-page-btn-view"
                    >
                      <span aria-hidden>👁</span> View Website
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="projects-page-btn projects-page-btn-code"
                    >
                      <span aria-hidden>⌘</span> View Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="projects-page-empty">No projects in this category yet.</p>
          )}
        </section>

        <footer className="footer-enhanced">
          <div className="footer-columns">
            <div className="footer-col footer-col-brand">
              <p className="footer-brand">
                <span className="footer-brand-accent">N</span>eila <span className="footer-brand-accent">•</span>
              </p>
              <p className="footer-desc">
                Third-year AI student at Numidia Institute of Technology (NIT) & Full Stack developer.
              </p>
              <div className="footer-social-circles">
                <a href="https://github.com/Berkaneneila" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
                <a href="https://www.linkedin.com/in/neila-berkane-561689346" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                <a href="mailto:berkaneneila2005@gmail.com" aria-label="Email">@</a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <nav className="footer-links-list">
                <Link href="/">Home</Link>
                <Link href="/education">Experience</Link>
                <span className="footer-link-active">Projects</span>
                <Link href="/#skills">Achievements</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Get In Touch</h4>
              <p className="footer-contact-item">berkaneneila2005@gmail.com</p>
              <p className="footer-contact-item">Algeria · Remote / Hybrid</p>
              <Link href="/contact" className="btn-gradient btn-gradient-small">
                Hire Me
              </Link>
            </div>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Neila</p>
        </footer>
      </main>
    </div>
  );
}
