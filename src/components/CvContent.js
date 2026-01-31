export default function CvContent() {
  return (
    <div id="cv-content" className="cv-document">
      <style>{`
        .cv-document {
          width: 210mm;
          padding: 14mm 20mm;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 9.5pt;
          line-height: 1.3;
          color: #1a1a1a;
          background: #fff;
          box-sizing: border-box;
        }
        .cv-document * { box-sizing: border-box; }
        .cv-links {
          font-size: 10pt;
          color: #333;
          margin-bottom: 18px;
        }
        .cv-links span { margin: 0 6px; color: #999; }
        .cv-links a { color: #1a1a1a; text-decoration: none; }
        .cv-section { margin-bottom: 10px; }
        .cv-section-title {
          font-size: 10.5pt;
          font-weight: 700;
          margin: 0 0 6px 0;
          color: #111;
        }
        .cv-document p { margin: 0 0 4px 0; color: #333; }
        .cv-document li { margin: 0 0 3px 0; color: #333; }
        .cv-document ul { margin: 4px 0 10px 0; padding-left: 18px; }
        .cv-company { font-weight: 700; margin: 0 0 2px 0; }
        .cv-role { font-style: italic; margin: 0 0 2px 0; font-size: 9.5pt; }
        .cv-date { font-size: 9pt; color: #666; margin: 0 0 4px 0; }
        .cv-lang-horizontal { display: flex; flex-wrap: wrap; gap: 20px 40px; margin-top: 15px; }
        .cv-lang-item { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
        .cv-lang-name { font-weight: 600; font-size: 9.5pt; }
        .cv-lang-dots { display: flex; gap: 2px; }
        .cv-dot { width: 5px; height: 5px; border-radius: 50%; background: #1a1a1a; }
        .cv-dot-empty { background: #ddd; }
        .cv-name { font-size: 18pt; font-weight: 700; margin: 0 0 10px 0; color: #111; }
      `}</style>

      <h1 className="cv-name">Neila Berkane</h1>
      <div className="cv-links">
        berkaneneila2005@gmail.com
        <span>|</span>
        portfolio/neila-berkane.vercel.app
        <span>|</span>
        linkedin.com/in/neila-berkane-561689346
        <span>|</span>
        github.com/Berkaneneila
      </div>

      <div className="cv-section">
        <h2 className="cv-section-title">Skills</h2>
        <p><strong>Languages:</strong> Python, C, JavaScript, SQL, MongoDB.</p>
        <p><strong>Technologies & Frameworks:</strong> React, Next.js, NodeJS, ExpressJS, Flask.</p>
        <p><strong>Tools:</strong> Kaggle, Google Collab, Figma.</p>
      </div>

      <div className="cv-section">
        <h2 className="cv-section-title">Work Experience</h2>

        <p className="cv-company">Djezzy, Algeria</p>
        <p className="cv-role">Internship – Churn Algorithm Classification</p>
        <p className="cv-date">2nd year · 2023 – 2024</p>
        <ul>
          <li>Developed and implemented churn prediction models using classification algorithms.</li>
          <li>Analyzed customer data to identify churn patterns and risk factors.</li>
          <li>Built pipelines for data preprocessing and model evaluation.</li>
          <li>Collaborated with the team to deliver actionable insights for retention strategies.</li>
        </ul>

        <p className="cv-company">NIT Computer Society Club (NCS), Algiers, Algeria</p>
        <p className="cv-role">HR Department – Hackathon Coordination</p>
        <p className="cv-date">2023 – 2024</p>
        <ul>
          <li>Contacted and invited participants to the hackathon.</li>
          <li>Designed and maintained the participant database.</li>
          <li>Organized participant information for event coordination.</li>
        </ul>
      </div>

      <div className="cv-section">
        <h2 className="cv-section-title">Education</h2>

        <p className="cv-company">University, Algiers, Algeria</p>
        <p className="cv-role">Bachelor&apos;s Degree in Artificial Intelligence</p>
        <p className="cv-date">Sep 2022 – Jun 2026</p>
        <p><strong>Relevant Coursework:</strong> Object-Oriented Programming, Databases, Machine Learning, Deep Learning, Computer Vision, Statistics and Probability, Computer Networks, Scientific English Writing.</p>

        <p className="cv-company">Brainer X</p>
        <p className="cv-role">Certificate in Full Stack Web Development</p>
        <p className="cv-date">Professional training · Remote / Algeria</p>
        <p><strong>Tech:</strong> React, Next.js, Node.js, MongoDB.</p>
      </div>

      <div className="cv-section">
        <h2 className="cv-section-title">Projects</h2>
        <p><strong>Elegant</strong> — E-commerce furniture and home decor platform. React, Next.js.</p>
        <p><strong>TrainSight</strong> — AI-powered fitness platform with form correction. React, Next.js.</p>
        <p><strong>Orbital Defender</strong> — Reinforcement Learning with custom Gymnasium environment. Python, RL.</p>
        <p><strong>Churn Classification</strong> — Customer retention analysis with classification algorithms. Python, Scikit-learn.</p>
      </div>

      <div className="cv-section">
        <h2 className="cv-section-title">Languages</h2>
        <div className="cv-lang-horizontal">
          <div className="cv-lang-item">
            <span className="cv-lang-name">French</span>
            <div className="cv-lang-dots">
              <span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot" />
            </div>
          </div>
          <div className="cv-lang-item">
            <span className="cv-lang-name">Arabic</span>
            <div className="cv-lang-dots">
              <span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot cv-dot-empty" /><span className="cv-dot cv-dot-empty" />
            </div>
          </div>
          <div className="cv-lang-item">
            <span className="cv-lang-name">English</span>
            <div className="cv-lang-dots">
              <span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot" /><span className="cv-dot cv-dot-empty" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
