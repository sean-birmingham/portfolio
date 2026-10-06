<div align="center">

# Sean Birmingham — Portfolio

**Front-end developer in Great Mills, Maryland**

**[sbirmingham.dev](https://sbirmingham.dev)**

[LinkedIn](https://www.linkedin.com/in/sean-birmingham) · [GitHub](https://github.com/sean-birmingham) · [Email](mailto:sean.birmingham98@gmail.com)

</div>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/preview-dark.jpg">
  <img alt="The portfolio homepage, showing my name, role, and links to email me, GitHub, and LinkedIn" src=".github/assets/preview-light.jpg">
</picture>

## About the site

This is my personal portfolio: one page that introduces me, shows what I've built, and makes it easy to get in touch. I designed it around what a hiring manager looks for first, so it gets straight to who I am, my projects, and how to reach me.

### What's on it

- **Intro**: who I am, my availability, and quick links to email me or find me on GitHub and LinkedIn
- **About**: my photo, a short bio, what I'm into outside of code, and the tools I work with
- **Projects**: what I've built, starting with [Filmpire](https://filmpire-sbirmingham.netlify.app/), a movie discovery app, shown with its own screenshot for phone, tablet, and desktop
- **Experience, Education, and Certifications**: each certificate links to the original
- **Contact**: a message form that goes straight to my inbox, plus my email with a one-click copy button

## Design

- **Blue and black** palette, with light and dark themes. The site follows each visitor's system setting, and the toggle in the header remembers their choice.
- **Archivo**, a typeface with a wide width axis, for the bold, stretched headings.
- **Dot-grid backdrop** with a soft blue glow behind the intro.
- **Responsive** layout from small phones to wide desktop screens.

## Under the hood

- The saved theme is applied before the page draws, so it never flashes the wrong colors on load.
- Project screenshots load per device, so phones download a phone-sized image instead of a desktop one.
- The contact form has built-in spam protection and still sends when JavaScript is turned off.
- Every piece of text on the site lives in one typed file, `content/profile.ts`, separate from the layout.
- A custom link-preview image for sharing on LinkedIn and in messages, plus a sitemap, a 404 page, and visitor analytics.

## Built with

[![Next.js, React, TypeScript, Tailwind CSS, Vercel](https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,vercel)](https://skillicons.dev)

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Web3Forms · Vercel

---

© 2026 Sean Birmingham. All rights reserved. The code, design, and content of this site are not licensed for reuse.
