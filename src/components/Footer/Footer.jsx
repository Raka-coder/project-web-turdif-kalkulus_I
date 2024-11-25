import { Link, animateScroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <>
      <footer className="bg-zinc-950 py-8 text-gray-300 shadow-lg">
        <div className="container mx-auto px-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bagian 1 : Logo */}
            <div className="flex">
              <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={scrollToTop}
                className="flex hover:brightness-125"
              >
                <img
                  src="./src/assets/logo/Logo Biru.png"
                  alt="logo"
                  srcset=""
                  className="h-6 w-6 mt-1 cursor-pointer "
                />
                <div className="font-bold text-2xl cursor-pointer ml-2">
                  turdif
                </div>
                <div className="font-normal text-lg cursor-pointer mt-8 -ml-24">
                  Turunan Diferensial
                </div>
              </Link>
            </div>
            {/* Bagian 2: Tautan Navigasi */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Website</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={1000}
                    className="hover:text-white dark:hover:text-white cursor-pointer font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="materi"
                    smooth={true}
                    duration={1000}
                    className="hover:text-white dark:hover:text-white cursor-pointer font-medium"
                  >
                    Materi
                  </Link>
                </li>
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={1000}
                    className="hover:text-white dark:hover:text-white cursor-pointer font-medium"
                  >
                    Hitung
                  </Link>
                </li>
                <li>
                  <Link
                    to="cardTeam"
                    smooth={true}
                    duration={1000}
                    className="hover:text-white dark:hover:text-white cursor-pointer font-medium"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Bagian 3: Program yang digunakan */}
            <div>
              <div className="text-lg font-semibold">Program Tools</div>
              <div className="flex space-x-2.5 mt-4">
                <a
                  href="https://vite.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-125"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                    style={{ width: "24px" }}
                  />
                </a>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-125"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    style={{ width: "24px" }}
                  />
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-125"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    style={{ width: "24px" }}
                  />
                </a>
                <a
                  href="https://www.npmjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-125"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                    style={{ width: "24px" }}
                  />
                </a>
                <a
                  href="https://nodejs.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-125"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    width="24px"
                  >
                    <path
                      fill="#83CD29"
                      d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    />
                  </svg>
                </a>
              </div>
              <div>
                {/* Bagian 4 : hosted by */}
                <div className="text-lg font-semibold mt-4">Hosted Using</div>
                <div className="flex space-x-2 -mt-1">
                  <a
                    href="https://vercel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:brightness-125"
                  >
                    <svg
                      aria-label="Vercel logotype"
                      height="64"
                      role="img"
                      viewBox="0 0 283 64"
                      width="64"
                    >
                      <path
                        d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Bagian 5 : Informasi hak cipta */}
          <div className="mt-12 text-center font-normal text-gray-300 dark:text-gray-300">
            Copyright &copy; turdif {new Date().getFullYear()}
            <a
              href="https://unsil.ac.id/"
              className="ml-1 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universitas Siliwangi
            </a>{" "}
            - Informatika 24 F.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
