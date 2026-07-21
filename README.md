# Chima Ben — Portfolio

> **Fullstack Developer · Backend & AI Integration · Based in Nigeria**

A cinematic, dark-themed personal portfolio showcasing fullstack development projects, backend/AI work, and UX design case studies. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, just clean and deliberate code.

---

## 🔗 Live Site

[chimaben.dev](https://chimaben.dev) <!-- Update with your actual domain -->

---

## ✨ Features

- **Cinematic dark aesthetic** — gold accents, editorial typography, film-strip hero detail
- **Fully responsive** — mobile-first layout, slide-in mobile navigation
- **Scroll-triggered animations** — chapters reveal on enter via IntersectionObserver
- **Staggered hero entrance** — sequential fade-up animations on load
- **Project cards** — real screenshot support with graceful gradient fallbacks
- **Parallax hero background** — subtle depth effect on desktop
- **Semantic HTML** — proper ARIA labels, roles, and accessible markup throughout
- **Performance-conscious** — lazy-loaded images, passive scroll listeners, `unobserve` after first reveal
- **Custom scrollbar** — gold accent, 3px width

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — custom properties, grid, clamp(), animations |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts) |
| Icons | Font Awesome 6.5 |
| Hosting | Vercel / Netlify |

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML — all sections
├── style.css               # All styles — design tokens, layout, components
├── logo.svg                # Nav logo
├── hero-bg.jpeg            # Hero parallax background image
├── portfolio-img-*.webp    # Profile photo
├── chima-cv (1).pdf    # Downloadable CV
└── screenshots/            # Project card images
    ├── cineMate.png
    ├── greener-dashboard.png
    ├── campus-crib.png
    └── fish-phish-scr.png
```

---

## 🚀 Getting Started

No build step required. Clone and open.

```bash
git clone https://github.com/benmarcel/portfolio.git
cd portfolio
```

Then open `index.html` directly in your browser, or serve it locally:

```bash
# Python
python -m http.server 3000

# Node (npx)
npx serve .
```

---

## 🎨 Design System

The entire visual identity is driven by CSS custom properties defined in `:root`. To retheme the portfolio, only these values need to change:

```css
:root {
  --bg-deep:    #0c0e14;   /* Deepest background */
  --bg-raised:  #171c24;   /* Cards and surfaces */
  --gold:       #d4af37;   /* Primary accent */
  --gold-light: #f0cc5a;   /* Hover state */
  --text-primary:  #eef0f4;
  --text-secondary:#9aa3b2;
}
```

Typography uses two fonts with distinct roles:
- **Cormorant Garamond** — display headings, hero name, chapter titles (editorial, cinematic)
- **DM Sans** — body copy, UI labels, navigation, buttons (clean, readable)

---

## 📐 Sections

| # | Section | ID |
|---|---|---|
| — | Hero | `hero-cinematic` |
| 01 | About / The Beginning | `#about` |
| 02 | Experience / The Journey | `#the-journey` |
| 03 | Projects / Selected Work | `#projects` |
| 04 | Skills / The Toolkit | `#skills` |
| 05 | Contact / The Next Chapter | `#contact` |

---

## 🖼️ Adding Project Screenshots

Each project card supports a real screenshot image. To add one:

1. Drop the image into the project root (e.g. `screenshots/myproject.png`)
2. In `index.html`, add the `<img>` tag inside the relevant `.project-poster`:

```html
<img
  class="project-poster-img"
  src="./screenshots/myproject.png"
  alt="My project screenshot"
  loading="lazy"
>
```

If no image is provided, the card falls back to a radial gradient using `--project-color` set on the element via inline style.

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 900px` | Full two-column hero, desktop nav, side-by-side about & contact |
| `≤ 900px` | Single-column hero, portrait scales down, stacked contact |
| `≤ 768px` | Mobile nav toggle visible, desktop links hidden, timeline simplified |
| `≤ 400px` | Stacked hero CTAs, reduced hero font size, text-first ordering |

---

## ♿ Accessibility

- All interactive elements have descriptive `aria-label` attributes
- Decorative elements marked `aria-hidden="true"`
- Mobile toggle button exposes `aria-expanded` state
- Section headings use `aria-labelledby` to associate with `<section>` landmarks
- Images carry descriptive, context-specific `alt` text
- Colour contrast between text and backgrounds meets WCAG AA

---

## 🚢 Deployment

**Vercel (recommended)**

```bash
npx vercel
```

**Netlify**

Drag and drop the project folder into [app.netlify.com](https://app.netlify.com), or connect the GitHub repo directly.

**Important:** Ensure `chima-ben-resume.pdf` is present in the project root before deploying — the Download CV button will 404 otherwise.

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | benmarcel@gmail.com |
| LinkedIn | [linkedin.com/in/chima-ben](https://www.linkedin.com/in/chima-ben/) |
| GitHub | [github.com/benmarcel](https://github.com/benmarcel) |
| Twitter / X | [@chima_ben_dev](https://x.com/chima_ben_dev) |
| Behance | [behance.net/marcelben](https://www.behance.net/marcelben) |

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use it as inspiration — attribution appreciated but not required.

---

*© 2026 Chima Ben. A Story Still Being Written.*