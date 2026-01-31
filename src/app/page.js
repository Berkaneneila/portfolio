"use client";

import { useState } from "react";
import Link from "next/link";
import CvContent from "@/components/CvContent";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [downloading, setDownloading] = useState(false);
  const scrollTo = (id) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleDownloadCV = async () => {
    setDownloading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("cv-content");
      if (element) {
        await html2pdf().set({
          margin: 8,
          filename: "Neila-Berkane-CV.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: "avoid-all" },
        }).from(element).save();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar activeLink="home" />

      <main>
        {/* HERO — two columns: text left, illustration + badge right */}
        <section className="hero-single hero-two-col" id="top">
          <div className="hero-left">
            <h1 className="hero-greeting">Hi, I'm <span className="hero-name">Neila</span></h1>
            <p className="hero-role-line hero-role-gradient">
              Artificial Intelligence · Full Stack Developer · Web & Data
            </p>
            <p className="hero-desc">
              Third-year AI undergraduate student at Numidia Institute of Technology (NIT) with a strong
              background in full stack development, passionate about building intelligent,
              scalable, and user-focused digital solutions.
            </p>
            <div className="hero-cta">
              <button
                type="button"
                className="primary-button primary-button-blue"
                onClick={scrollTo("projects")}
              >
                View projects <span aria-hidden>↓</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadCV}
                disabled={downloading}
                className="secondary-button secondary-button-outline"
              >
                {downloading ? "Generating PDF..." : "Download CV"}
              </button>
            </div>
            <div className="hero-pills">
              <span className="hero-pill hero-pill-blue">
                <span className="hero-pill-icon" aria-hidden>💡</span>
                Artificial Intelligence
              </span>
              <span className="hero-pill hero-pill-gray">
                <span className="hero-pill-icon" aria-hidden>&lt;/&gt;</span>
                Full Stack Developer
              </span>
              <span className="hero-pill hero-pill-pink">
                <span className="hero-pill-icon" aria-hidden>🎨</span>
                Web & Data
              </span>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Berkaneneila" target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-social-circle">GH</a>
              <a href="https://www.linkedin.com/in/neila-berkane-561689346" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-social-circle">in</a>
              <a href="mailto:berkaneneila2005@gmail.com" aria-label="Email" className="hero-social-circle">@</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-illustration-frame hero-illustration-animated">
              <div className="hero-illustration-placeholder">
                <img src="/hero-photo.png" alt="Neila" className="hero-photo" />
              </div>
            </div>
            <p className="hero-availability-badge hero-badge-animated">✨ Available for work ✨</p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-block about-section" id="about">
          <div className="about-inner">
            <header className="about-header">
              <span className="about-label">About me</span>
              <h2 className="about-title">Building solutions at the intersection of AI, data & web</h2>
            </header>
            <div className="about-content">
              <p className="about-bio">
                I am <strong>Neila</strong>, a third-year undergraduate student in <strong>Artificial Intelligence</strong> at <strong>Numidia Institute of Technology (NIT)</strong>. I have also completed a professional training program in <strong>Full Stack Development</strong>. My interests lie at the intersection of AI, data, and modern web technologies, where I enjoy transforming ideas into efficient and impactful applications.
              </p>
              <div className="about-focus">
                <div className="about-focus-card">
                  <h3 className="about-focus-title about-focus-blue">AI & Data</h3>
                  <p className="about-focus-desc">Python, machine learning fundamentals, Kaggle, Google Colab</p>
                </div>
                <div className="about-focus-card">
                  <h3 className="about-focus-title about-focus-magenta">Web & Full Stack</h3>
                  <p className="about-focus-desc">React, Next.js, Node.js, Express, MongoDB, SQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & TECHNOLOGIES (4 cartes) */}
        <section className="skills-enhanced-wrap" id="skills">
          <h2 className="skills-enhanced-title">Skills & Technologies</h2>
          <p className="skills-enhanced-subtitle">
            Technologies and tools I work with to bring ideas to life.
          </p>
          <div className="skills-enhanced-grid">
            <div className="skill-card-enhanced">
              <div className="skill-card-header skill-card-pink">
                <h3>Frontend</h3>
                <span className="skill-card-icon" aria-hidden>◇</span>
              </div>
              <div className="skill-card-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
            <div className="skill-card-enhanced">
              <div className="skill-card-header skill-card-blue">
                <h3>Backend & DataBase</h3>
                <span className="skill-card-icon" aria-hidden>⚙</span>
              </div>
              <div className="skill-card-tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-card-enhanced">
              <div className="skill-card-header skill-card-purple">
                <h3>AI & Data</h3>
                <span className="skill-card-icon" aria-hidden>◆</span>
              </div>
              <div className="skill-card-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Reinforcement Learning</span>
                
              </div>
            </div>
            <div className="skill-card-enhanced">
              <div className="skill-card-header skill-card-green">
                <h3>Tools & Others</h3>
                <span className="skill-card-icon" aria-hidden>◈</span>
              </div>
              <div className="skill-card-tags">
                <span>Git</span>
                <span>Notion</span>
                <span>C</span>
                <span>Java</span>
                 <span>Kaggle</span>
                  <span>Google colab</span>
                

              </div>
            </div>
          </div>
          <p className="skills-enhanced-footer">Continuously learning and expanding my skill set</p>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="projects">
          <h2 className="projects-head">Selected work</h2>
          <p className="projects-sub">Projects I&apos;ve built — from AI apps to web platforms.’</p>
            <div className="projects-grid">
            <article className="project-card-v2" style={{ animationDelay: "0ms" }}>
              <div className="project-card-thumb">
                <span className="project-card-badge">Live</span>
                <div className="project-card-gradient project-card-gradient-1" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Elegant</h3>
                <p className="project-card-meta">E-Commerce · Furniture & Home Decor</p>
                <p className="project-card-desc">
                  Curated collection of elegant furniture and home decor that transforms your space into a sanctuary of style and comfort.
                </p>
                <div className="project-card-tags">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>E-Commerce</span>
                </div>
                <div className="project-card-actions">
                  <a href="https://project-ecommerces.vercel.app/" target="_blank" rel="noreferrer" className="project-card-link">
                    View site <span>→</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card-v2" style={{ animationDelay: "80ms" }}>
              <div className="project-card-thumb">
                <span className="project-card-badge">Live</span>
                <div className="project-card-gradient project-card-gradient-2" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">TrainSight</h3>
                <p className="project-card-meta">AI-Powered Fitness Platform</p>
                <p className="project-card-desc">
                  Real-time AI coaching for form correction, progress tracking, and personalized training plans.
                </p>
                <div className="project-card-tags">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>AI</span>
                </div>
                <div className="project-card-actions">
                  <a href="https://tswebsitess.vercel.app/" target="_blank" rel="noreferrer" className="project-card-link">
                    View site <span>→</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card-v2" style={{ animationDelay: "160ms" }}>
              <div className="project-card-thumb">
                <span className="project-card-badge">Python</span>
                <div className="project-card-gradient project-card-gradient-3" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Orbital Defender</h3>
                <p className="project-card-meta">RL · Gymnasium · Algorithm comparison</p>
                <p className="project-card-desc">
                  Reinforcement Learning with a custom Gymnasium environment and algorithm comparison. Semester ML project.
                </p>
                <div className="project-card-tags">
                  <span>Python</span>
                  <span>Gymnasium</span>
                  <span>Reinforcement Learning</span>
                </div>
                <div className="project-card-actions">
                  <a href="https://github.com/mariloubgt/RL-Custom-Environment2" target="_blank" rel="noreferrer" className="project-card-link">
                    View code <span>→</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card-v2" style={{ animationDelay: "240ms" }}>
              <div className="project-card-thumb">
                <span className="project-card-badge">Python</span>
                <div className="project-card-gradient project-card-gradient-1" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Churn Classification</h3>
                <p className="project-card-meta">Classification · Data Analysis</p>
                <p className="project-card-desc">
                  Classification of churn algorithms for customer retention analysis. Data preprocessing, model training, and evaluation pipelines.
                </p>
                <div className="project-card-tags">
                  <span>Python</span>
                  <span>Scikit-learn</span>
                  <span>Pandas</span>
                </div>
                <div className="project-card-actions">
                  <a href="https://github.com/Berkaneneila" target="_blank" rel="noreferrer" className="project-card-link">
                    View code <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section-block contact-section" id="contact">
          <div className="contact-inner">
            <header className="contact-header">
              <span className="contact-label">Contact</span>
              <h2 className="contact-title">Let&apos;s work together</h2>
            </header>
            <p className="contact-intro">
              Open to internships, academic projects, freelance work, and collaborative
              opportunities in AI and web development.
            </p>

            <div className="contact-cta-card">
              <p className="contact-cta-text">
                Have a project in mind? Want to collaborate? Drop me a message and let&apos;s talk.
              </p>
              <Link href="/contact" className="primary-button primary-button-blue contact-cta-btn">
                Send a message →
              </Link>
            </div>

            <p className="contact-direct-label">Or reach out directly</p>
            <div className="contact-direct-buttons">
              <a href="mailto:berkaneneila2005@gmail.com" className="contact-direct-btn contact-direct-btn-email">Email</a>
              <a href="https://github.com/Berkaneneila" target="_blank" rel="noreferrer" className="contact-direct-btn contact-direct-btn-github">GitHub</a>
              <a href="https://www.linkedin.com/in/neila-berkane-561689346" target="_blank" rel="noreferrer" className="contact-direct-btn contact-direct-btn-linkedin">LinkedIn</a>
            </div>
            <div className="contact-meta">
              <span className="contact-meta-item">Algeria</span>
              <span className="contact-meta-dot" aria-hidden>·</span>
              <span className="contact-meta-item">Remote / Hybrid</span>
            </div>
          </div>
        </section>

        <footer className="footer-enhanced">
          <div className="footer-cta-strip">
            <p className="footer-cta-text">
              Always interested in new opportunities and exciting projects. Let&apos;s discuss how to bring your ideas to life.
            </p>
            <Link href="/contact" className="btn-gradient">
              Get In Touch
            </Link>
          </div>
          <div className="footer-columns">
            <div className="footer-col footer-col-brand">
              <p className="footer-brand">
                <span className="footer-brand-accent">N</span>eila <span className="footer-brand-accent">•</span>
              </p>
              <p className="footer-desc">
                Third-year AI student at Numidia Institute of Technology (NIT) & Full Stack developer. I enjoy transforming ideas into efficient, impactful applications at the intersection of AI, data, and web technologies.
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
                <button type="button" onClick={scrollTo("top")}>Home</button>
                <Link href="/education">Experience</Link>
                <Link href="/projects">Projects</Link>
                <button type="button" onClick={scrollTo("skills")}>Achievements</button>
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
      {/* Hidden CV for PDF generation */}
      <div style={{ position: "absolute", left: "-9999px", top: 0, width: "210mm" }} aria-hidden>
        <CvContent />
      </div>
    </div>
  );
}
