import React, { useState, useEffect } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import AOS from 'aos';

const KalkulatorTurunanEksponensial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [k, setK] = useState("");
  const [u, setU] = useState("");
  const [uPrime, setUPrime] = useState("");
  const [result, setResult] = useState("");
  const [simplifiedResult, setSimplifiedResult] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Fungsi validasi input
  const validateInput = () => {
    // Cek apakah semua input terisi
    if (!k || !u || !uPrime) {
      setIsValid(false);
      setResult("Lengkapi semua input terlebih dahulu.");
      setSimplifiedResult("");
      return false;
    }

    // Validasi input numerik
    const numericValidation = /^-?\d*\.?\d+$/;
    if (!numericValidation.test(k) || !numericValidation.test(uPrime)) {
      setIsValid(false);
      setResult("Input harus berupa angka valid.");
      setSimplifiedResult("");
      return false;
    }

    setIsValid(true);
    return true;
  };

  const calculateDerivative = () => {
    // Lakukan validasi input
    if (!validateInput()) return;

    // Proses perhitungan turunan
    const formattedResult = `${k} \\cdot ${uPrime} \\cdot e^{${u}}`;

    const simplifiedConstant = parseFloat(k) * parseFloat(uPrime);
    const simplifiedConstantFormatted =
      Number.isInteger(simplifiedConstant)
        ? simplifiedConstant
        : simplifiedConstant.toFixed(2);

    const simplified = `${simplifiedConstantFormatted} \\cdot e^{${u}}`;

    setResult(formattedResult);
    setSimplifiedResult(simplified);
  };

  const resetInputs = () => {
    setK("");
    setU("");
    setUPrime("");
    setResult("");
    setSimplifiedResult("");
    setIsValid(true);
  };

  return (
    <div id="turunanEksponensial" className="min-h-screen bg-gray-100 dark:bg-gray-950 
      flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white
        rounded-lg shadow-xl p-6 space-y-6" data-aos="fade-up"
        data-aos-duration="750">
        <h1 className="text-2xl font-bold text-center 
          text-blue-600">
          Kalkulator Turunan Eksponensial
        </h1>
        <div>
          <label className="block text-sm font-medium mb-2">Konstanta (k)</label>
          <input
            type="text"
            value={k}
            onChange={(e) => {
              setK(e.target.value);
              setIsValid(true);
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Masukkan konstanta k"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Pangkat Fungsi (u)</label>
          <input
            type="text"
            value={u}
            onChange={(e) => {
              setU(e.target.value);
              setIsValid(true);
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Masukkan fungsi pangkat u"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Turunan Pangkat (u')</label>
          <input
            type="text"
            value={uPrime}
            onChange={(e) => {
              setUPrime(e.target.value);
              setIsValid(true);
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Masukkan turunan u"
          />
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={calculateDerivative}
            className="w-full bg-green-500 font-medium text-white 
              py-2 rounded-lg hover:bg-green-600 transition"
          >
            Hitung Turunan
          </button>
          <button
            onClick={resetInputs}
            className="w-full bg-red-500 font-medium text-white 
              py-2 rounded-lg hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>

        {/* Hasil Turunan */}
        {result && (
          <div className={`mt-6 p-2 rounded-lg ${
            isValid 
              ? 'bg-green-100 border border-green-400' 
              : 'bg-red-100 border border-red-400'
          }`}>
            <div className="text-center">
              <h2 className={`text-lg font-semibold mb-2 ${
                isValid 
                  ? 'text-green-700' 
                  : 'text-red-700'
              }`}>
                Hasil Turunan:
              </h2>
              <div className={`text-base mb-2 ${
                isValid 
                  ? 'text-green-800' 
                  : 'text-red-800'
              }`}>
                {isValid ? (
                  <BlockMath>{result}</BlockMath>
                ) : (
                  <p>{result}</p>
                )}
              </div>
            </div>

            {isValid && simplifiedResult && (
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-green-700 mb-4">
                  Hasil Disederhanakan
                </h2>
                <div className="text-xl text-green-800">
                  <BlockMath>{simplifiedResult}</BlockMath>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default KalkulatorTurunanEksponensial;