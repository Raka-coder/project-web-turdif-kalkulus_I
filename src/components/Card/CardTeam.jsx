import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

{/* Image Team */}
import ginanjarImg from "/src/assets/images/teams-image/ginanjar.jpg";
import luthfiImg from "/src/assets/images/teams-image/luthfi.jpg";
import rakaImg from "/src/assets/images/teams-image/raka.jpg";
import tazrilImg from "/src/assets/images/teams-image/tazril.jpg";

const teams = [
  {
    id: 1,
    name: "Ginanjar Abdul Hakim",
    image: ginanjarImg,
    sector: "UI Designer",
    instagram: "https://www.instagram.com/ginanjar_d98/",
  },
  {
    id: 2,
    name: "Luthfi Apriliansyah",
    image: luthfiImg,
    sector: "UX Designer",
    instagram: "https://www.instagram.com/lthfiiaa/",
  },
  {
    id: 3,
    name: "Raka Restu Saputra",
    image: rakaImg,
    sector: "Developer",
    instagram: "https://www.instagram.com/rakresptra/",
  },
  {
    id: 4,
    name: "Tazril Dwi Aprila",
    image: tazrilImg,
    sector: "Researcher",
    instagram: "https://www.instagram.com/thislifeisnt_omoshiroi/",
  },
];

function CardTeams() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id="cardTeam"
        className="bg-gray-100 dark:bg-gray-950 transition-all duration-300 ease-in py-24 px-4 md:px-8"
      >
        <div className="w-full border-t border-gray-300 dark:border-gray-700 my-4 md:my-6 lg:my-8"></div>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white mb-24 mt-24">
          Contributors
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center h-auto"
            >
              <img
                src={team.image}
                alt={team.name}
                title={team.sector}
                className="w-32 h-32 rounded-full mb-4 hover:-translate-y-1.5 transition-all duration-300 ease-in-out cursor-pointer shadow-2xl"
              />
              <h2 className="text-lg md:text-medium font-semibold text-black dark:text-white pt-1">
                {team.name}
              </h2>
              <h1 className="text-medium md:text-normal font-semibold text-blue-500 pt-1 pb-1">
                {team.sector}
              </h1>

              <a
                href={team.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  className="rounded-lg p-0 fill-black dark:fill-white hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardTeams;
