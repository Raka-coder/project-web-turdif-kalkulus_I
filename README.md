
# Project Web Turunan Diferensial (turdif) - Kalkulus I

Project ini dibuat bertujuan untuk menjadi media pembelajaran sehingga orang-orang akan lebih mudah untuk memahami materi turunan diferensial. Pada project ini sudah dilengkapi dengan kalkulator turunan diferensial sehingga dapat memudahkan dalam proses mengerjakan soal turunan.


## Authors

- Github: [@Ginanjar Abdul Hakim](https://www.github.com/Maruzensky98)

- Github: [@Luthfi Apriliansyah](https://www.github.com/Luthfi778)

- Github: [@Raka Restu Saputra](https://www.github.com/Raka-coder)

- Github: [@Tazril Dwi Aprila](https://www.github.com/12345678167)

## Features

- Single Page
- Light/dark mode button
- Responsive 

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Prerequisites
- node => v20.10.0
- npm  => v10.2.3

## Installation & Setup

Install project with vite

```bash
  npm create vite@latest
  npm create vite@latest project-app -- --template react

  cd project-app
  npm install
```
Install Tailwind css to the project-app

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
Add the paths to all of your template files in your tailwind.config.js file.
```bash
  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
Start run the project-app, run your build process with npm run dev.
```bash
  npm run dev
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/Raka-coder/project-web-turdif-kalkulus_I.git
```

Go to the project directory

```bash
  cd project-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
## Tech Stack

<div align="left">
  <img src="https://skillicons.dev/icons?i=vite" height="40" alt="vite logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="npm logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/nodedotjs/339933" height="40" alt="nodejs logo"  />
</div>

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Copyright (c) turdif [2024] [Raka Restu Saputra](https://www.github.com/Raka-coder).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
