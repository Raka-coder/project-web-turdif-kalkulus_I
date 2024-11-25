import React, { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import AOS from 'aos';

function Materi() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const notasiData = [
    {
      title: "Notasi Leibniz",
      content:
        "Notasi Leibniz adalah metode penulisan turunan menggunakan simbol d/dx.",
      notation: <BlockMath math="\frac{dy}{dx}" />,
      details: [
        "Menggunakan simbol diferensial d/dx",
        "Dikembangkan oleh Gottfried Wilhelm Leibniz",
        "Paling umum digunakan dalam kalkulus",
      ],
    },
    {
      title: "Notasi Lagrange",
      content:
        "Notasi Lagrange menggunakan tanda prima (') untuk menunjukkan turunan.",
      notation: <InlineMath math="f'(x)" />,
      details: [
        "Menggunakan tanda prima f'(x)",
        "Dikembangkan oleh Joseph-Louis Lagrange",
        "Sederhana dan mudah dibaca",
      ],
    },
    {
      title: "Notasi Newton",
      content:
        "Notasi Newton menggunakan notasi titik untuk menandakan turunan terhadap waktu.",
      notation: <InlineMath math="\dot{y}" />,
      details: [
        "Menggunakan notasi titik di atas variabel",
        "Sering digunakan dalam fisika dan dinamika",
        "Berguna untuk analisis perubahan terhadap waktu",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div
        id="materi"
        className="h-auto bg-gray-100 dark:bg-gray-950 dark:text-white transition-all duration-300 ease-in"
      >
        <section className="mx-auto py-8 px-4 md:py-8 md:px-12">
          <div className="w-full border-t border-gray-300 dark:border-gray-700 my-4 md:my-6 lg:my-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pt-12">
            {/* Bagian Definisi Turunan */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Apa itu Turunan Diferensial?
              </h2>
              <p className="text-lg md:text-xl">
                Turunan fungsi atau juga bisa disebut dengan diferensial adalah
                fungsi lain dari suatu fungsi sebelumnya, contohnya fungsi{" "}
                <InlineMath math="f" />{""}
                dijadikan <InlineMath math="f'(x)" /> yang mempunyai nilai tidak
                memakai aturan dan hasil dari fungsi akan berubah sesuai dengan
                variabel yang dimasukan, atau secara umum suatu besaran yang
                berubah seiring perubahan besaran lainnya. Proses dalam
                menemukan turunan disebut sebagai diferensiasi. Lalu untuk
                pengertian turunan aljabar adalah perluasan dari materi limit
                fungsi.
              </p>
              <p className="text-lg md:text-xl mt-4">
                Notasi turunan fungsi aljabar seperti berikut:
                <BlockMath math="\frac{dy}{dx}=\frac{df}{dx}= y'=f'(x)" />
              </p>
            </div>

            {/* Bagian Notasi Turunan Accordion */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Notasi Turunan
              </h2>

              <div className="space-y-4 py-2">
                {notasiData.map((notasi, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`
                        w-full text-left px-6 py-4 flex justify-between items-center 
                        ${
                          activeIndex === index
                            ? "bg-gray-100 dark:bg-gray-800"
                            : "bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-100"
                        }
                        transition duration-300
                      `}
                    >
                      <span className="font-semibold text-base">
                        {notasi.title}
                      </span>
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-300 
                          ${activeIndex === index ? "rotate-180" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Accordion Content */}
                    {activeIndex === index && (
                      <div
                        className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 
                          animate-fade-in-down"
                      >
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {notasi.content}
                        </p>

                        <div className="mb-3 text-xl font-bold">
                          Contoh Notasi: {notasi.notation}
                        </div>

                        <ul className="space-y-2 pl-4 list-disc text-gray-700 dark:text-gray-300">
                          {notasi.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="pl-2">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Turunan Fungsi Konstanta
              </h2>
              <p className="text-lg md:text-xl">
                Fungsi konstanta adalah garis horizontal, sehingga kemiringannya
                selalu nol di setiap titik. Artinya, tidak ada perubahan nilai
                fungsi terhadap perubahan nilai <InlineMath math="x" />.
                <p className="text-lg md:text-xl mt-4">
                  Karakteristik Fungsi Konstanta
                </p>
                <p className="text-lg md:text-xl mt-4">
                  Rumus: <br />
                  Jika <InlineMath math="f(x)=c" /> (dimana c adalah konstanta),
                  maka <InlineMath math="f'(x)=0" />{""}.
                </p>
                <p className="text-lg md:text-xl mt-4">
                  Hasil Tetap: <br />
                  Hasil dari fungsi ini tidak berubah meskipun nilai input{" "}
                  <InlineMath math="(x)" /> berubah. Contohnya, untuk fungsi{" "}
                  <InlineMath math="f(x) = 4" />, hasilnya selalu{" "}
                  <InlineMath math="4" />.
                </p>
              </p>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Turunan Fungsi Pangkat
              </h2>
              <p className="text-lg md:text-xl">
                Fungsi pangkat adalah jenis fungsi matematika yang melibatkan
                variabel yang dipangkatkan dengan suatu bilangan. Secara umum,
                fungsi pangkat dapat dituliskan dalam bentuk:{" "}
                <InlineMath math="f(x) = x^n " />
                <br />
                Dimana: <br />
                <br />
                <li className="pl-2">
                  <InlineMath math="f(x)" /> adalah nilai fungsi. <br />
                </li>
                <li className="pl-2">
                  <InlineMath math="(x)" /> adalah variabel. <br />
                </li>
                <li className="pl-2">
                  <InlineMath math="n" /> adalah bilangan real yang menunjukkan
                  pangkat.
                </li>
                <p className="text-lg md:text-xl mt-4">
                  Karakteristik Fungsi Pangkat
                </p>
                <br />
                <p className="text-lg md:text-xl">
                  Bentuk Umum: Fungsi pangkat dapat memiliki berbagai bentuk
                  tergantung pada nilai <InlineMath math="(n)" />: <br />
                  <br />
                  <li className="pl-2">
                    Jika <InlineMath math="(n)" /> adalah bilangan bulat positif
                    (misalnya ( n = 2 )), fungsi tersebut adalah fungsi kuadrat.
                    <br />
                  </li>
                  <li className="pl-2">
                    Jika <InlineMath math="(n)=1" />, fungsi tersebut adalah
                    fungsi linear. <br />
                  </li>
                  <li className="pl-2">
                    Jika <InlineMath math="(n)" /> adalah bilangan bulat negatif
                    (misalnya ( n = -1 )), fungsi tersebut akan menghasilkan
                    fungsi rasional contoh:
                    <BlockMath math="( f(x) = \frac{1}{x} )" />
                  </li>
                  <li className="pl-2">
                    Jika <InlineMath math="(n)" /> adalah bilangan bulat negatif
                    (misalnya ( n = -1 )), fungsi tersebut akan menghasilkan
                    fungsi akar contoh: <BlockMath math="( f(x) = \sqrt{x} )" />
                  </li>
                </p>
              </p>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Turunan Fungsi Linear
              </h2>
              <p className="text-lg md:text-xl">
                Fungsi linier adalah persamaan garis lurus. Koefisien{" "}
                <InlineMath math="m" /> adalah kemiringan garis, yang merupakan
                nilai konstan. Jadi, turunan dari fungsi linier adalah
                kemiringannya.
              </p>
              <p className="text-lg md:text-xl">
                Bentuk Umum: <InlineMath math="f(x) = mx + b" />
                <br />
                <br />
              </p>
              <p className="text-lg md:text-xl">
                Dimana: <br />
                <br />
              </p>
              <p className="text-lg md:text-xl">
                <li className="pl-2">
                  <InlineMath math="f(x)" /> adalah nilai fungsi.
                </li>
                <li className="pl-2">
                  <InlineMath math="(x)" /> adalah variabel.
                </li>
                <li className="pl-2">
                  <InlineMath math="(m)" /> adalah kemiringan (slope) dari garis
                  yang menunjukkan seberapa banyak nilai{" "}
                  <InlineMath math="f(x)" /> berubah ketika{" "}
                  <InlineMath math="(x)" /> berubah.
                </li>
                <li className="pl-2">
                  <InlineMath math="(b)" /> adalah intersep (nilai awal) pada
                  sumbu <InlineMath math="y" /> , yaitu nilai{" "}
                  <InlineMath math="f(x)" /> ketika{" "}
                  <InlineMath math="(x = 0)" />.
                </li>
              </p>
              <br />
              <p className="text-lg md:text-xl">
                Sifat: <br />
                <br />
              </p>
              <p className="text-lg md:text-xl">
                <li className="pl-2">
                  Fungsi linear bersifat aditif, artinya jika kita memiliki dua
                  input, hasilnya adalah penjumlahan dari hasil fungsi untuk
                  masing-masing input.
                </li>
                <li className="pl-2">
                  Fungsi ini juga bersifat homogen, yang berarti jika kita
                  mengalikan input dengan suatu bilangan, hasil fungsi juga akan
                  berubah sesuai dengan bilangan tersebut.
                </li>
              </p>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Turunan Fungsi Trigonometri
              </h2>
              <p className="text-lg md:text-xl">
                Turunan fungsi trigonometri adalah konsep dalam kalkulus yang
                berkaitan dengan laju perubahan fungsi trigonometri terhadap
                variabel independennya. Dalam konteks ini, kita dapat menghitung
                turunan dari fungsi-fungsi trigonometri seperti sinus, kosinus,
                tangen, dan lainnya.
              </p>
              <p className="text-lg md:text-xl">
                <br />
                Berikut adalah turunan dari fungsi-fungsi trigonometri yang
                paling umum:
                <p className="text-lg md:text-xl">
                  <br />
                  <li className="pl-2">
                    Turunan dari Sinus:{" "}
                    <BlockMath math="[ \frac{d}{dx}(\sin x) = \cos x ]" />
                  </li>
                  <li className="pl-2">
                    Turunan dari Kosinus:{" "}
                    <BlockMath math="[ \frac{d}{dx}(\cos x) = -\sin x ]" />
                  </li>
                  <li className="pl-2">
                    Turunan dari Tangen:{" "}
                    <BlockMath math="[ \frac{d}{dx}(\tan x) = \sec^2 x ]" />
                  </li>
                </p>
              </p>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Turunan Fungsi Eksponensial
              </h2>
              <p className="text-lg md:text-xl">
                Turunan fungsi eksponensial adalah konsep dalam kalkulus yang
                menggambarkan laju perubahan fungsi eksponensial terhadap
                variabel independennya. Fungsi eksponensial adalah fungsi yang
                memiliki bentuk umum: <InlineMath math=" f(x) = a^x " />
                <br />
                <br />
                Dimana <InlineMath math="a" /> adalah bilangan positif yang
                merupakan basis dari eksponensial, dan <InlineMath math="x" />{" "}
                adalah variabel.
              </p>
              <p className="text-lg md:text-xl">
                <br />
                Rumus turunan untuk fungsi eksponensial: <br />
                <br />
                <li className="pl-2">
                  Turunan dari Fungsi Eksponensial Umum:{" "}
                  <BlockMath math="[ \frac{d}{dx}(a^x) = a^x \ln(a) ]" />
                  Dimana <InlineMath math="\ln(a)" /> adalah logaritma natural
                  dari basis <InlineMath math="(a)" />.
                </li>
                <li className="pl-2">
                  Turunan dari Fungsi Eksponensial Natural: Jika{" "}
                  <InlineMath math="(a=e)" /> Dimana <InlineMath math="(e)" />{" "}
                  adalah bilangan <InlineMath math="Euler" />, kira-kira{" "}
                  <InlineMath math="2.71828" />, maka turunan fungsi
                  eksponensial natural adalah: <br />
                  <BlockMath math="[ \frac{d}{dx}(e^x) = e^x ]" /> Ini
                  menunjukkan bahwa fungsi eksponensial natural adalah
                  satu-satunya fungsi eksponensial yang memiliki sifat unik di
                  mana turunan dari fungsi tersebut sama dengan fungsi itu
                  sendiri.
                </li>
              </p>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Turunan Fungsi Logaritma
              </h2>
              <p className="text-lg md:text-xl">
                Fungsi logaritma adalah fungsi yang digunakan untuk menentukan
                eksponen yang diperlukan untuk menghasilkan suatu bilangan
                tertentu dari basis tertentu. Fungsi logaritma yang paling umum
                adalah logaritma natural basis <InlineMath math="(e)" /> dan
                logaritma desimal (basis 10).
                <br />
                <br />
                Berikut adalah rumus turunan untuk fungsi logaritma yang paling
                umum:
                <li className="pl-2">
                  Turunan dari Logaritma Natural: Jika{" "}
                  <InlineMath math="( f(x) = \ln(x) )" /> (logaritma natural),
                  maka turunan dari fungsi ini adalah:{" "}
                  <BlockMath math="[ \frac{d}{dx}(\ln(x)) = \frac{1}{x} ]" />{" "}
                  Dimana <InlineMath math="(x>0)" />
                </li>
                <li className="pl-2">
                  Turunan dari Logaritma dengan Basis <InlineMath math="(a)" />:
                  Jika <BlockMath math="( f(x) = \log_a(x) )" /> (logaritma
                  dengan basis <InlineMath math="(a)" />
                  ), maka turunan dari fungsi ini adalah:{" "}
                  <BlockMath math="[ \frac{d}{dx}(\log_a(x)) = \frac{1}{x \ln(a)} ]" />{" "}
                  Dimana <InlineMath math="(a>0)" /> dan{" "}
                  <InlineMath math="(a\neq1)" />.
                </li>
              </p>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Aturan Turunan
              </h2>
              <p className="text-lg md:text-xl">
                Berikut beberapa aturan dasar dalam diferensiasi:
              </p>
              <br />
              <br />
              <p className="text-lg md:text-xl">
                <li className="pl-2">
                  Aturan Konstan: Jika <InlineMath math="f(x)=c" />, maka{" "}
                  <InlineMath math="f'(x)=0" />.
                </li>
                <li className="pl-2">
                  Aturan Pangkat: Jika <InlineMath math="f(x)=x^n" />, maka{" "}
                  <InlineMath math="f'(x)=nx^x-1" /> (f aksen = nx pangkat x -
                  1).
                </li>
                <li className="pl-2">
                  Aturan Penjumlahan:{" "}
                  <InlineMath math="(f+g)'(x)=f'(x)+g'(x)" />.
                </li>
                <li className="pl-2">
                  Aturan Perkalian:{" "}
                  <InlineMath math="(fg)'(x)=f'(x)g(x)+f(x)g'(x)" />.
                </li>
                <li className="pl-2">
                  Aturan Pembagian:{" "}
                  <BlockMath math=" \frac{f}{g}'(x) = \frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}" />
                </li>
                <li className="pl-2">
                  Aturan Rantai: Jika <InlineMath math="y=f(u)" /> dan{" "}
                  <InlineMath math="u=g(x)" /> maka{" "}
                  <BlockMath math="\frac{dy}{dx} = \frac{dy}{du}.\frac{du}{dx}" />
                </li>
              </p>
            </div>
            {/*  */}
            <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 shadow-lg mt-12 mb-12" data-aos="fade up" data-aos-duration="750">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                Contoh Penerapan
              </h2>
              <p className="text-lg md:text-xl">
                <li className="pl-2">
                  Fisika: Menentukan kecepatan (turunan posisi terhadap waktu)
                  dan percepatan (turunan kecepatan terhadap waktu) suatu benda.
                </li>
                <li className="pl-2">
                  Ekonomi: Menganalisis laju perubahan permintaan atau penawaran
                  suatu produk.
                </li>
                <li className="pl-2">
                  Teknik: Menganalisis laju perubahan suatu proses atau sistem.
                </li>
              </p>
            </div>
          </div>
      
        <div className="w-full border-t border-gray-300 dark:border-gray-700 my-4 md:my-6 lg:my-8"></div>
      
        </section>
      </div>


      {/* Optional: Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-in;
        }
      `}</style>
    </>
  );
}

export default Materi;
