import React, { useState, useEffect } from "react";
import DarkModeToggle from "/src/components/Button/ButtonTheme";
import { Link } from "react-scroll";
import imageLogo from '/src/assets/logo/Logo Biru.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScrollToCalculator = (event) => {
    event.preventDefault();
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Effect untuk menutup menu mobile saat ukuran layar berubah
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white shadow-xl dark:bg-gray-900 transition-all duration-300 ease-in-out">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="" className="flex items-center">
              <img
                src={imageLogo}
                alt="logo"
                className="h-6 w-6 mt-1 cursor-pointer"
              />
              <div className="text-black dark:text-white font-bold text-2xl cursor-pointer ml-2">
                turdif
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="home"
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-lg text-lg font-semibold text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 cursor-pointer"
              >
                Home
              </Link>

              <Link
                to="materi"
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-lg text-lg font-semibold text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 cursor-pointer"
              >
                Materi
              </Link>

              {/* Dropdown Hitung */}
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="px-3 py-2 rounded-lg text-lg font-semibold text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 cursor-pointer"
                >
                  Hitung
                </div>
                <div
                  className={`absolute z-10 mt-2 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in ${
                    isDropdownOpen ? "max-h-screen opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-4"
                  } overflow-hidden`}
                >
                    <Link
                      to="turunan"
                      smooth={true}
                      duration={1000}
                      onClick={handleScrollToCalculator}
                      className="block px-4 py-2 text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600  cursor-pointer"
                    >
                      Hitung Turunan
                    </Link>
                    <Link
                      to="turunanCampuran"
                      smooth={true}
                      duration={1000}
                      onClick={handleScrollToCalculator}
                      className="block px-4 py-2 text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600  cursor-pointer"
                    >
                      Hitung Turunan Campuran
                    </Link>
                    {/* <Link
                      to=""
                      smooth={true}
                      duration={1000}
                      onClick={handleScrollToCalculator}
                      className="block px-4 py-2 text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600  cursor-pointer"
                    >
                      Hitung Turunan Fungsi Kali & Bagi
                    </Link> */}
                    <Link
                      to="turunanTrigonometri"
                      smooth={true}
                      duration={1000}
                      onClick={handleScrollToCalculator}
                      className="block px-4 py-2 text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600  cursor-pointer"
                    >
                      Hitung Turunan Trigonometri
                    </Link>
                    <Link
                      to="turunanEksponensial"
                      smooth={true}
                      duration={1000}
                      onClick={handleScrollToCalculator}
                      className="block px-4 py-2 text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600  cursor-pointer"
                    >
                      Hitung Turunan Eksponensial
                    </Link>
                    {/* Tambahkan link dropdown lainnya di sini */}
                  </div>
                </div>

              <Link
                to="cardTeam"
                smooth={true}
                duration={1000}
                className="px-3 py-2 rounded-lg text-lg font-semibold text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800  cursor-pointer"
              >
                Team
              </Link>
                  {/* Dark Mode */}
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg-md"
            >
              {/* Menu Toggle Icon */}
              <span
                className={`transition-all duration-300 ease-in-out transform ${
                  isOpen
                    ? "opacity-0 rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                } `}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  style={{ color: "gray" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
              <span
                className={`absolute transition-all duration-300 ease-in-out transform ${
                  isOpen
                    ? "opacity-100 rotate-180 scale-100"
                    : "opacity-0 rotate-0 scale-75"
                } `}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  style={{ color: "gray" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {windowWidth < 768 && (
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden -ml-2 ${
              isOpen
                ? "max-h-screen opacity-100 transform translate-y-0"
                : "max-h-0 opacity-0 transform -translate-y-4"
            }`}
          >
            <div className="-px-2 pb-4 space-y-2">
              <Link
                to="home"
                smooth={true}
                duration={1000}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="materi"
                smooth={true}
                duration={1000}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer" >
                Materi
              </Link>

              {/* Mobile Dropdown Hitung */}
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
                >
                  Hitung
                </div>
                <div
                  className={`ml-2 space-y-2 rounded-lg shadow-lg transition-all duration-300 ease-in ${
                    isDropdownOpen ? "max-h-screen opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-4"
                  } overflow-hidden`}
                >
                    <Link
                      to="turunan"
                      smooth={true}
                      duration={1000}
                      // onClick={handleScrollToCalculator}
                      className="block px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
                    >
                      Hitung Turunan
                    </Link>
                    <Link
                      to="turunanCampuran"
                      smooth={true}
                      duration={1000}
                      // onClick={handleScrollToCalculator}
                      className="block px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
                    >
                      Hitung Turunan Campuran
                    </Link>
                    {/* <Link
                      to="turunanHasilBagi"
                      smooth={true}
                      duration={1000}
                      onClick={handleScrollToCalculator}
                      className="block px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
                    >
                      Hitung Turunan Fungsi Bagi
                    </Link> */}
                    <Link
                      to="turunanTrigonometri"
                      smooth={true}
                      duration={1000}
                      // onClick={handleScrollToCalculator}
                      className="block px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
                    >
                      Hitung Turunan Trigonometri
                    </Link>
                    <Link
                      to="turunanEksponensial"
                      smooth={true}
                      duration={1000}
                      // onClick={handleScrollToCalculator}
                      className="block px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
                    >
                      Hitung Turunan Eksponensial
                    </Link>
                  </div>
              </div>

              <Link
                to="cardTeam"
                smooth={true}
                duration={1000}
                // onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  cursor-pointer"
              >
                Team
              </Link>
              <div className="ml-3">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;