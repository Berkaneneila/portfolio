## AI + Webdev Portfolio

This is a single‑page portfolio built with [Next.js](https://nextjs.org) showcasing AI and web development work. The main layout and styling live in:

- `src/app/page.js` – hero, about, projects, skills, contact sections
- `src/app/globals.css` – global styles and color palette

### Color palette

The site uses a dark, AI‑inspired palette defined as CSS variables in `globals.css`:

- `--bg: #020617`
- `--surface: #0b1120`
- `--surface-alt: #111827`
- `--primary: #6366f1`
- `--primary-hover: #4f46e5`
- `--accent: #22c55e`
- `--text: #e5e7eb`
- `--text-muted: #9ca3af`
- `--border: #1f2937`

### Run the project locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Customizing the portfolio

- Update your personal info in `src/app/page.js` (`Your Name`, location, email, handles)
- Replace the placeholder project descriptions and links with your own work
- Optionally add a `public/resume.pdf` file to make the “Download CV” button work

You can deploy this portfolio easily to platforms like Vercel once you’re happy with the content.
