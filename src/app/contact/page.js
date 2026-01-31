"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [contactStatus, setContactStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("sending");
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value || "",
      message: form.message.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setContactStatus("success");
      else setContactStatus("error");
    } catch {
      setContactStatus("error");
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar activeLink="contact" />

      <main>
        <section className="section-block contact-page-section" id="contact">
          <header className="contact-page-header">
            <h1 className="contact-page-title">Get In Touch</h1>
            <p className="contact-page-desc">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can work together!
            </p>
          </header>

          <div className="contact-page-grid">
            <div className="contact-page-form-panel">
              <h2 className="contact-panel-title">Send Me a Message</h2>
              {contactStatus === "success" ? (
                <div className="contact-success">
                  <p className="contact-success-title">Message sent</p>
                  <p className="contact-success-text">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form contact-form-compact" onSubmit={handleContactSubmit}>
                  <div className="field">
                    <label htmlFor="contact-name" className="field-label">Name <span className="required">*</span></label>
                    <input type="text" id="contact-name" name="name" className="field-input" placeholder="Your full name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email" className="field-label">Email <span className="required">*</span></label>
                    <input type="email" id="contact-email" name="email" className="field-input" placeholder="your.email@example.com" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-subject" className="field-label">Subject <span className="required">*</span></label>
                    <input type="text" id="contact-subject" name="subject" className="field-input" placeholder="What&apos;s this about?" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-message" className="field-label">Message <span className="required">*</span></label>
                    <textarea id="contact-message" name="message" className="field-textarea" placeholder="Tell me about your project or inquiry..." rows={4} required />
                  </div>
                  {contactStatus === "error" && (
                    <p className="contact-form-error">Something went wrong. Please try again or email me directly.</p>
                  )}
                  <button type="submit" className="contact-submit primary-button primary-button-blue" disabled={contactStatus === "sending"}>
                    {contactStatus === "sending" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-page-info-panel">
              <h2 className="contact-panel-title">Contact Information</h2>
              <div className="contact-info-list">
                <a href="mailto:berkaneneila2005@gmail.com" className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden>✉</span>
                  berkaneneila2005@gmail.com
                </a>
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden>📍</span>
                  Algeria, Algiers
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden>🌐</span>
                  Remote / Hybrid
                </div>
              </div>
              <h3 className="contact-follow-title">Follow Me</h3>
              <div className="contact-follow-links">
                <a href="https://github.com/Berkaneneila" target="_blank" rel="noreferrer" className="contact-follow-btn" aria-label="GitHub">GH</a>
                <a href="https://www.linkedin.com/in/neila-berkane-561689346" target="_blank" rel="noreferrer" className="contact-follow-btn" aria-label="LinkedIn">in</a>
              </div>
            </div>
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
                <Link href="/education">Experience</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/#skills">Achievements</Link>
                <span className="footer-link-active">Contact</span>
              </nav>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Get In Touch</h4>
              <p className="footer-contact-item">berkaneneila2005@gmail.com</p>
              <p className="footer-contact-item">Algeria · Remote / Hybrid</p>
            </div>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Neila</p>
        </footer>
      </main>
    </div>
  );
}
