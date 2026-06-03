
<div align="center">

  <img src="src/assets/logo/turdif.svg" alt="turdif Logo" width="100" />

  # Turdif — Turunan Diferensial

  **Platform pembelajaran interaktif Kalkulus I** dengan kalkulator turunan diferensial langkah-demi-langkah, materi visual, dan MathJax-powered formula rendering.

  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Raka-coder/project-web-turdif-kalkulus_I/tree/main?tab=MIT-1-ov-file)
  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
  ![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

</div>

---

## Tentang

**Turdif** (Turunan Diferensial) adalah web app interaktif yang dirancang untuk membantu mahasiswa memahami konsep dasar turunan diferensial. Dilengkapi dengan kalkulator pintar yang menampilkan langkah penyelesaian secara visual menggunakan notasi matematika, serta materi pembelajaran yang tersusun sistematis.

## Fitur

| Fitur | Deskripsi |
|-------|-----------|
| **Kalkulator Turunan** | 4 mode: Umum (polinomial), Trigonometri, Eksponensial & Logaritma, serta Referensi rumus |
| **Materi Interaktif** | 8 topik turunan dengan navigasi sidebar, notasi matematika, dan penjelasan step-by-step |
| **Notasi Matematika** | Render LaTeX & AsciiMath via MathJax — fraksi, pangkat, trigonometri, limit, dll |
| **Dark / Light Mode** | Toggle tema dengan persistensi localStorage |
| **Smooth Scroll** | Navigasi GSAP-powered scroll ke section Home, Materi, Team |
| **Responsive** | Mobile-first, sheet navigation di mobile, grid responsif |
| **Error Pages** | Halaman 404 & error handler dengan UI yang konsisten |
| **Typing Animation** | Hero section dengan efek typing teks berulang |

## Tech Stack


| Kategori | Teknologi |
|----------|-----------|
| Framework | React 19 + React Router 7 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animasi | GSAP (ScrollTo) + AOS |
| Matematika | MathJax 3 + better-react-mathjax |
| Markdown | react-markdown |
| Icons | Lucide React |
| Font | Bricolage Grotesque (heading) + Geist Sans (body) |


## Struktur Proyek

```
src/
├── assets/              # Logo, gambar tim, font
├── components/
│   ├── calculator/      # Tab kalkulator (Umum, Trig, Eksponensial, Referensi)
│   ├── landing/         # Hero, Materi, Notasi, Team sections
│   ├── ui/              # 54+ komponen shadcn/ui
│   ├── Layout.jsx       # Outlet + Navbar + Footer wrapper
│   ├── Navbar.jsx       # Fixed navbar + GSAP scroll
│   ├── Footer.jsx       # Footer + GSAP scroll
│   ├── ErrorBoundary.jsx
│   ├── MathJaxMath.jsx  # InlineMath, BlockMath, AsciiMath
│   ├── MarkdownRenderer.jsx
│   ├── ThemeContext.jsx  # Dark mode provider
│   └── TextType.jsx     # Typing animation
├── pages/
│   ├── LandingPage.jsx
│   ├── CalculatorPage.jsx
│   ├── NotFoundPage.jsx # 404
│   └── ErrorPage.jsx    # Generic error
├── hooks/
├── lib/
├── App.jsx              # Routes + MathJaxContext
├── main.jsx             # Entry point
└── index.css            # Tailwind + theme variables
```

## Prerequisites

| Dependency | Version |
|------------|---------|
| Node.js | >= 20.10.0 |
| npm | >= 10.2.3 |

## Instalasi & Pengembangan Local

**1. Clone repository**

```bash
git clone https://github.com/Raka-coder/project-web-turdif-kalkulus_I.git
cd project-web-turdif-kalkulus_I
```

**2. Install dependencies**

```bash
npm install
```

**3. Jalankan development server**

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

**4. Build untuk produksi**

```bash
npm run build
npm run preview   # preview build di http://localhost:4173
```

**5. Lint & Format**

```bash
npm run lint      # jalankan ESLint
npx prettier .    # format kode
```

## Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Jalankan Vite dev server |
| `npm run build` | Build untuk produksi |
| `npm run preview` | Preview build produksi |
| `npm run lint` | Jalankan ESLint |

## Routes

| Path | Halaman |
|------|---------|
| `/` | Landing page (Hero + Materi + Team) |
| `/kalkulator` | Kalkulator turunan diferensial |
| `/error` | Halaman error |
| `*` | 404 Not Found |

## Authors

| Nama | GitHub |
|------|--------|
| **Ginanjar Abdul Hakim** | [@Maruzensky98](https://github.com/Maruzensky98) |
| **Luthfi Apriliansyah** | [@Luthfi778](https://github.com/Luthfi778) |
| **Raka Restu Saputra** | [@Raka-coder](https://github.com/Raka-coder) |
| **Tazril Dwi Aprila** | [@12345678167](https://github.com/12345678167) |

## License

[MIT License](https://github.com/Raka-coder/project-web-turdif-kalkulus_I/tree/main?tab=MIT-1-ov-file) © 2024 Turdif
