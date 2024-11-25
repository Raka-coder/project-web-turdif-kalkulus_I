import React, { useState } from "react";
import { BlockMath } from "react-katex";

const DifferentialCalculator = () => {
  const [base, setBase] = useState(""); // Basis, contoh: 2x
  const [exponent, setExponent] = useState(""); // Eksponen, contoh: 3x
  const [result, setResult] = useState("");

  const calculateDifferential = () => {
    if (base && exponent) {
      // Format Latex
      const u = base;
      const v = exponent;
      const formula = `${u}^{${v}} \\cdot \\left( \\ln(${u}) \\cdot ${v}' + \\frac{${u}'}{${u}} \\cdot ${v} \\right)`;

      setResult(formula);
    } else {
      setResult("Masukkan basis dan eksponen dengan lengkap!");
    }
  };

  const resetFields = () => {
    setBase("");
    setExponent("");
    setResult("");
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Kalkulator Diferensial
      </h2>
      <div className="mb-4">
        <label className="block text-gray-600 dark:text-gray-300">
          Basis (u):
        </label>
        <input
          type="text"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-gray-300"
          placeholder="Contoh: 2x"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 dark:text-gray-300">
          Eksponen (v):
        </label>
        <input
          type="text"
          value={exponent}
          onChange={(e) => setExponent(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-gray-300"
          placeholder="Contoh: 3x"
        />
      </div>
      <button
        onClick={calculateDifferential}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2"
      >
        Hitung
      </button>
      <button
        onClick={resetFields}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Reset
      </button>
      {result && (
        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
          {result !== "Masukkan basis dan eksponen dengan lengkap!" ? (
            <BlockMath math={result} />
          ) : (
            <p className="text-gray-800 dark:text-gray-100">{result}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DifferentialCalculator;
