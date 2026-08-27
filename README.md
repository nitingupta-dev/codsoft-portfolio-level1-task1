# Nitin Gupta — Personal Portfolio Website

A modern, dark-themed, responsive personal portfolio website built for the **CODSOFT Web Development Internship — Level 1, Task 1 (Portfolio)**.

🔗 **Live Demo:** _Add your GitHub Pages link here after deployment_

---

## 📖 Project Description

This is a fully responsive, single-page personal portfolio website showcasing my background as a Computer Science Engineering student, my technical skills, academic projects, certifications, and contact information. It's built with plain HTML, CSS and JavaScript — no frameworks — so it's simple to explain, maintain and extend.

---

## ✨ Features

- Sticky, responsive navigation bar with a mobile hamburger menu and smooth scrolling
- Hero section with intro, call-to-action buttons and social links
- About section with education summary card
- Skills section displayed as clean, icon-based cards (no fake proficiency percentages)
- Project showcase with cards for 4 real projects, hover effects, and GitHub/demo buttons
- Dedicated Resume section with Download and View buttons
- Education timeline
- Certifications section
- Strengths section
- Contact section with contact details and a frontend contact form (not yet connected to a backend/email service)
- Scroll-reveal fade-in animations
- Dark, glassmorphism-inspired, blue-accented "premium developer portfolio" design
- Fully responsive across desktop, laptop, tablet and mobile
- Semantic HTML, accessible markup, and SEO-friendly meta tags

---

## 🛠️ Technologies Used

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, Grid, animations, responsive design
- **JavaScript (Vanilla)** — navigation behaviour, scroll animations, contact form interaction
- **Font Awesome** — icons
- **Google Fonts** — Space Grotesk & Inter

No frameworks, backend, or database are used, in line with the CODSOFT Level 1 requirements.

---

## 📁 Folder Structure

```text
CODSOFT_PORTFOLIO/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   │   └── profile.jpg        (add your photo here — see instructions below)
│   │
│   └── resume/
│       └── New-Resume.pdf     (add your resume PDF here — see instructions below)
│
└── README.md
```

---

## 🖼️ Adding Your Profile Photo

The About section currently displays a placeholder avatar (initials "NG") instead of a real photo, since no photo was provided.

To add your own photo:

1. Save your photo as `profile.jpg` inside `assets/images/`.
2. Open `index.html`, find the comment `PROFILE PHOTO PLACEHOLDER` inside the About section.
3. Replace the `<div class="avatar-placeholder">...</div>` block with:
   ```html
   <img src="assets/images/profile.jpg" alt="Photo of Nitin Gupta" class="about-photo" />
   ```

---

## 📄 Adding Your Resume

1. Export/save your resume as a PDF named `New-Resume.pdf`.
2. Place it inside `assets/resume/` so the final path is `assets/resume/New-Resume.pdf`.
3. The **Download Resume** and **View Resume** buttons (in the Hero and Resume sections) are already wired to this path — no code changes needed.

---

## 💻 Running the Website Locally

No build tools or installation required.

1. Download or clone this repository.
2. Open the `CODSOFT_PORTFOLIO` folder.
3. Double-click `index.html` (or right-click → Open with your browser).

That's it — the site runs entirely in the browser.

---

## ⬆️ Uploading to GitHub

1. Create a new repository on GitHub named `CODSOFT_TASK1` (rename as needed to match CODSOFT's required format).
2. On your computer, open a terminal inside the `CODSOFT_PORTFOLIO` folder.
3. Run the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CODSOFT Level 1 Task 1 - Portfolio Website"
   git branch -M main
   git remote add origin https://github.com/nitingupta-dev/CODSOFT_TASK1.git
   git push -u origin main
   ```
4. Refresh your GitHub repository page — your files should now be visible.

---

## 🌐 Deploying with GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
5. Wait a minute or two, then refresh the page — GitHub will show your live URL, typically:
   ```
   https://nitingupta-dev.github.io/CODSOFT_TASK1/
   ```
6. Add this link to the top of this README and to your LinkedIn/resume once live.

---

## 👤 Author

**Nitin Gupta**
Computer Science Engineering Student, NIET, Greater Noida

- Email: [nit12317in@gmail.com](mailto:nit12317in@gmail.com)
- LinkedIn: [linkedin.com/in/nitingupta-dev](https://www.linkedin.com/in/nitingupta-dev)
- GitHub: [github.com/nitingupta-dev](https://github.com/nitingupta-dev)

---

## ✅ CODSOFT Level 1 Task 1 — Requirements Checklist

| Requirement | Status |
|---|---|
| **Header** — Name visible | ✅ Hero section |
| **Header** — Tagline / introduction | ✅ Headline + intro paragraph |
| **About** — Image/profile placeholder | ✅ Avatar placeholder (swap for real photo) |
| **About** — Short biography | ✅ About section |
| **Skills** — Skills/expertise listed | ✅ Icon-based skill cards |
| **Projects** — Multiple projects displayed | ✅ 4 project cards |
| **Projects** — Titles and descriptions | ✅ Included per card |
| **Projects** — Space for images/demo links | ✅ GitHub/demo buttons (placeholders where links weren't provided) |
| **Resume** — Download/view option | ✅ Resume section + Hero buttons |
| **Contact** — Email | ✅ Included |
| **Contact** — Phone | ⚠️ Placeholder — add your number in `index.html` |
| **Contact** — LinkedIn/GitHub | ✅ Included |
| **Footer** — Copyright notice | ✅ `© 2026 Nitin Gupta` |
| **Footer** — Additional links | ✅ Social icons |
| **Responsive design** | ✅ Desktop, tablet, mobile tested |
| **No fake data** (experience, stats, testimonials) | ✅ None included |

---

_Built as part of the CODSOFT Web Development Internship — Level 1, Task 1._
