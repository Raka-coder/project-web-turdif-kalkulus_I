import React from "react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import HomeImg from "/src/assets/images/iconhome.png"; // Sesuaikan path gambar

function HomeMenu() {
  return (
    <div id="home" className="h-auto">
      <header className="bg-gray-100 dark:bg-gray-950 transition-all duration-300 ease-in-out text-black dark:text-white py-16 px-4 md:px-12">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Bagian Kiri - Teks */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl">Project Mata Kuliah Kalkulus I</p>

            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-blue-600">
              <Typewriter
                words={["Turunan Diferensial", "Jelajahi Dunia Turunan"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={75}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>

            <div className="space-y-2">
              <p className="text-lg md:text-xl mt-1">
                Pelajari konsep dasar turunan dan aplikasinya dalam matematika
              </p>
              <p className="text-lg md:text-xl mb-6">
                Yuk, belajar turunan bersama!
              </p>
            </div>

            <Link
              to="materi"
              smooth={true}
              duration={1000}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition duration-300 ease-in-out"
            >
              Mulai Belajar
            </Link>
          </div>

          {/* Bagian Kanan - Foto Ilustrasi */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="w-full max-w-md">
              <img
                src={HomeImg}
                alt="Ilustrasi Kalkulus"
                className="w-full h-auto object-contain 
                    transform hover:scale-105 hover:md:scale-125
                    transition duration-500 ease-in-out 
                    rounded-xl cursor-pointer drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomeMenu;
