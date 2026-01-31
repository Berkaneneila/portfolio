"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function EducationPage() {
  return (
    <div className="page-wrapper">
      <Navbar activeLink="experience" />

      <main>
        <section className="section-block education-section education-page">
          <h1 className="education-heading">Education</h1>
          <div className="education-timeline">
            <div className="education-timeline-line" aria-hidden />
            <article className="education-card">
              <div className="education-card-icon" aria-hidden><span>1</span></div>
              <div className="education-card-content">
                <h2 className="education-degree">1st-year Bachelor&apos;s degree in Artificial Intelligence</h2>
                <p className="education-institution">University</p>
                <div className="education-meta">
                  <span className="education-date">2023 – 2024</span>
                  <span className="education-location">Algeria, Algiers</span>
                </div>
                <ul className="education-list">
                  <li>Foundational knowledge in programming (Python, C)</li>
                  <li>Problem-solving and logical thinking</li>
                  <li>Core mathematics and computer science concepts</li>
                </ul>
                <div className="education-tags">
                  <span>Mathematics for CS</span>
                  <span>Programming Fundamentals</span>
                  <span>Logic & Algorithms</span>
                </div>
              </div>
            </article>
            <article className="education-card">
              <div className="education-card-icon" aria-hidden><span>2</span></div>
              <div className="education-card-content">
                <h2 className="education-degree">2nd-year Bachelor&apos;s degree in Artificial Intelligence</h2>
                <p className="education-institution">University</p>
                <div className="education-meta">
                  <span className="education-date">2024 – 2025</span>
                  <span className="education-location">Algeria, Algiers</span>
                </div>
                <ul className="education-list">
                  <li>Data structures, algorithms, and databases</li>
                  <li>Web technologies and client projects</li>
                  <li>Collaboration with design and development teams</li>
                </ul>
                <div className="education-tags">
                  <span>Data Structures</span>
                  <span>Web Basics</span>
                  <span>Algorithms</span>
                </div>
              </div>
            </article>
            <article className="education-card">
              <div className="education-card-icon" aria-hidden><span>3</span></div>
              <div className="education-card-content">
                <h2 className="education-degree">3rd-year Bachelor&apos;s degree in Artificial Intelligence</h2>
                <p className="education-institution">University</p>
                <div className="education-meta">
                  <span className="education-date">2025 – 2026</span>
                  <span className="education-location">Algeria, Algiers</span>
                </div>
                <ul className="education-list">
                  <li>Machine learning and AI fundamentals</li>
                  <li>Final-year projects and research</li>
                  <li>Full stack and data-driven applications</li>
                </ul>
                <div className="education-tags">
                  <span>Machine Learning</span>
                  <span>AI</span>
                  <span>Full Stack</span>
                </div>
              </div>
            </article>
            <article className="education-card">
              <div className="education-card-icon education-card-icon-cert" aria-hidden><span>Cert</span></div>
              <div className="education-card-content">
                <h2 className="education-degree">Certificate in Full Stack Web Development</h2>
                <p className="education-institution">Brainer X</p>
                <div className="education-meta">
                  <span className="education-date">Professional training</span>
                  <span className="education-location">Remote / Algeria</span>
                </div>
                <ul className="education-list">
                  <li>Modern web stack: React, Next.js, Node.js</li>
                  <li>Backend and databases (MongoDB, SQL)</li>
                  <li>Build and deploy full stack applications</li>
                </ul>
                <div className="education-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Next.js</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-block work-exp-section">
          <h2 className="work-exp-heading">Work Experience</h2>
          <div className="work-exp-timeline">
            <div className="work-exp-timeline-line" aria-hidden />
            <article className="work-exp-card">
              <div className="work-exp-icon" aria-hidden>
                <span className="work-exp-dots">●</span>
              </div>
              <div className="work-exp-content">
                <h3 className="work-exp-title">Internship – Churn Algorithm Classification</h3>
                <p className="work-exp-company">Djezzy</p>
                <div className="work-exp-meta">
                  <span className="work-exp-date">2nd year · 2023 – 2024</span>
                  <span className="work-exp-location">Algeria</span>
                </div>
                <p className="work-exp-desc">
                  Internship at Djezzy, working on classification of churn algorithms to analyze customer retention and attrition patterns.
                </p>
                <ul className="work-exp-list">
                  <li>Developed and implemented churn prediction models using classification algorithms</li>
                  <li>Analyzed customer data to identify churn patterns and risk factors</li>
                  <li>Built pipelines for data preprocessing and model evaluation</li>
                  <li>Collaborated with the team to deliver actionable insights for retention strategies</li>
                </ul>
                <div className="work-exp-tags">
                  <span>Classification</span>
                  <span>Churn Algorithms</span>
                  <span>Data Analysis</span>
                  <span>Python</span>
                </div>
              </div>
            </article>
            <article className="work-exp-card">
              <div className="work-exp-icon work-exp-icon-hr" aria-hidden>
                <span className="work-exp-dots">●</span>
              </div>
              <div className="work-exp-content">
                <h3 className="work-exp-title">working – HR Department</h3>
                <p className="work-exp-company">NCS <i className="fas fa-club"></i></p>
                <div className="work-exp-meta">
                  <span className="work-exp-date">2nd year · 2023 – 2026</span>
                  <span className="work-exp-location">Algeria</span>
                </div>
                <p className="work-exp-desc">
                  HR Department , coordinating hackathon participants and managing participant data.
                </p>
                <ul className="work-exp-list">
                  <li>Contacted and called participants to invite them to the hackathon</li>
                  <li>Designed and maintained the participant database</li>
                  <li>Organized participant information for event coordination</li>
                  <li>Collaborated with HR team for smooth event logistics</li>
                </ul>
                <div className="work-exp-tags">
                  <span>HR</span>
                  <span>Database</span>
                  <span>Hackathon</span>
                  <span>Communication</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <footer className="footer-enhanced">
          <div className="footer-columns">
            <div className="footer-col footer-col-brand">
              <p className="footer-brand">
                <span className="footer-brand-accent">N</span>eila <span className="footer-brand-accent">•</span>
              </p>
              <p className="footer-desc">
                Third-year Artificial Intelligence student & Full Stack developer.
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
                <span className="footer-link-active">Experience</span>
                <Link href="/projects">Projects</Link>
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
