import React, { useState, useEffect } from "react";
import { BlockMath } from "react-katex";
import AOS from 'aos';
import 'katex/dist/katex.min.css';

const AlgebraCalculator = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [u, setU] = useState("");
  const [uPrime, setUPrime] = useState("");
  const [v, setV] = useState("");
  const [vPrime, setVPrime] = useState("");
  const [operation, setOperation] = useState("multiply");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  // Fungsi validasi input
  const validateInput = (input) => {
    const validInputRegex = /^[a-zA-Z0-9\+\-\*\/\^\(\)\s]+$/;
    return validInputRegex.test(input);
  };

  // Fungsi untuk menghitung turunan dari fungsi pangkat
  const calculateDerivative = (func) => {
    const regex = /(-?\d*\.?\d*)x\^(-?\d*\.?\d*)/;
    const match = func.match(regex);

    if (match) {
      const a = match[1] === '' || match[1] === '-' ? match[1] + '1' : match[1];
      const n = parseFloat(match[2]);
      const newA = a * n; // Turunan koefisien
      const newN = n - 1; // Turunan pangkat
      return `${newA}x^${newN}`; // Mengembalikan hasil turunan
    }

    return "Turunan tidak dikenali";
  };

  // Fungsi untuk menyederhanakan hasil
  const simplifyResult = (result) => {
    return result; // Untuk saat ini, kita kembalikan hasil tanpa perubahan
  };

  const calculate = () => {
    setError("");

    const inputs = [
      { value: u, name: "u(x)" },
      { value: v, name: "v(x)" }
    ];

    const invalidInputs = inputs.filter(input => 
      !input.value.trim() || !validateInput(input.value)
    );

    if (invalidInputs.length > 0) {
      const errorMessages = invalidInputs.map(input => 
        `${input.name} tidak valid atau kosong`
      );
      setError(errorMessages.join(", "));
      return;
    }

    try {
      let simplifiedResult = "";
      const calculatedUPrime = uPrime || calculateDerivative(u);
      const calculatedVPrime = vPrime || calculateDerivative(v);

      let detailedResult = ""; // Variabel untuk menyimpan hasil detail

      if (operation === "multiply") {
        // Perkalian
        simplifiedResult = `(${calculatedUPrime})(${v}) + (${calculatedVPrime})(${u})`;
        detailedResult = `Hasil dari u' * v + v' * u: ${simplifiedResult}`;
      } else if (operation === "divide") {
        // Pembagian
        simplifiedResult = `\\frac{(${calculatedUPrime})(${v}) - (${u})(${calculatedVPrime})}{(${v})^2}`;
        detailedResult = `Hasil dari \\frac{u' * v - u * v'}{v^2}: ${simplifiedResult}`;
      }

      // Sederhanakan hasil jika perlu
      const finalResult = simplifyResult(simplifiedResult);
      setResult(`${detailedResult} \n\n Setelah disederhanakan: ${finalResult}`);
    } catch (err) {
      setError("Terjadi kesalahan dalam perhitungan");
    }
  };

  const resetFields = () => {
    setU("");
    setUPrime("");
    setV("");
    setVPrime("");
    setOperation("multiply");
    setResult("");
    setError(""); // Reset error juga
  };

  return (
    <div id="operasiAlJabarKaliBagi" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-4 pt-36">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 space-y-4" data-aos="fade-up" data-aos-duration="750">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Kalkulator Operasi Aljabar
        </h1>                     
        <div className="space-y-4">
          <div>
          <label className="block text-gray-700 font-semibold mb-2">u(x):</label>
            <input
              type="text"
              value={u}
              onChange={(e) => {
                setU(e.target.value);
                setError(""); // Hapus error saat mengetik
              }}
              className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                error && !u.trim() 
                  ? 'border-red-500' 
                  : ''
              }`}
              placeholder="Contoh: 2x^2 + 3x"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">u'(x):</label>
            <input
              type="text"
              value={uPrime}
              onChange={(e) => {
                setUPrime(e.target.value);
                setError(""); // Hapus error saat mengetik
              }}
              className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                error && !uPrime.trim() 
                  ? 'border-red-500' 
                  : ''
              }`}
              placeholder="Turunan dari u(x)"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">v(x):</label>
            <input
              type="text"
              value={v}
              onChange={(e) => {
                setV(e.target.value);
                setError(""); // Hapus error saat mengetik
              }}
              className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                error && !v.trim() 
                  ? 'border-red-500' 
                  : ''
              }`}
              placeholder="Contoh: x^3 + 2x"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">v'(x):</label>
            <input
              type="text"
              value={vPrime}
              onChange={(e) => {
                setVPrime(e.target.value);
                setError(""); // Hapus error saat mengetik
              }}
              className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                error && !vPrime.trim() 
                  ? 'border-red-500' 
                  : ''
              }`}
              placeholder="Turunan dari v(x)"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Operasi:</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="multiply">Perkalian</option>
              <option value="divide">Pembagian</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={calculate}
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Hitung
          </button>
          <button
            onClick={resetFields}
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Reset
          </button>
        </div>
        
        {result && (
          <div className="mt-4 p-4 bg-green-100 rounded-lg text-center overflow-auto">
            <BlockMath math={result} />
          </div>
        )}
        
        {/* Tampilan Error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgebraCalculator;