"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  const secret = typeof window !== "undefined" ? localStorage.getItem("dashboard_secret") : null;

  useEffect(() => {
    if (secret) {
      setAuthenticated(true);
    } else {
      setLoading(false);
    }
  }, [secret]);

  useEffect(() => {
    if (authenticated && secret) {
      fetchContacts(secret);
    }
  }, [authenticated, secret]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError(false);
    const res = await fetch("/api/contacts", {
      headers: { Authorization: `Bearer ${password}` },
    });
    if (res.ok) {
      localStorage.setItem("dashboard_secret", password);
      setAuthenticated(true);
      setPassword("");
      fetchContacts(password);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dashboard_secret");
    setAuthenticated(false);
    setContacts([]);
  };

  const fetchContacts = async (token) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
      } else {
        setError("Failed to fetch contacts");
      }
    } catch (err) {
      setError("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!authenticated) {
    return (
      <div className="page-wrapper dashboard-page">
        <main className="dashboard-main">
          <div className="dashboard-login-card">
            <h1 className="dashboard-title">Contact Dashboard</h1>
            <p className="dashboard-subtitle">Enter your dashboard password to view contacts.</p>
            <form onSubmit={handleLogin} className="dashboard-login-form">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="dashboard-input"
                required
                autoFocus
              />
              {authError && <p className="dashboard-error">Invalid password.</p>}
              <button type="submit" className="primary-button primary-button-blue">
                Sign in
              </button>
            </form>
            <Link href="/" className="dashboard-back">
              ← Back to portfolio
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-wrapper dashboard-page">
      <header className="navbar dashboard-nav">
        <div className="navbar-inner">
          <span className="brand-logo-text">Contact Dashboard</span>
          <div className="dashboard-nav-actions">
            <button type="button" onClick={handleLogout} className="secondary-button secondary-button-outline">
              Logout
            </button>
            <Link href="/" className="nav-link">← Portfolio</Link>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <h1 className="dashboard-heading">Contacts</h1>
        {loading ? (
          <p className="dashboard-loading">Loading...</p>
        ) : error ? (
          <p className="dashboard-error">{error}</p>
        ) : contacts.length === 0 ? (
          <p className="dashboard-empty">No contacts yet.</p>
        ) : (
          <div className="dashboard-table-wrap">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id}>
                    <td className="dashboard-date">{formatDate(c.createdAt)}</td>
                    <td>{c.name}</td>
                    <td><a href={`mailto:${c.email}`} className="dashboard-email">{c.email}</a></td>
                    <td>{c.subject || "—"}</td>
                    <td className="dashboard-message">{c.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
