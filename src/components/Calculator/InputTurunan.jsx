import React from "react";

const InputForm = ({ coefficient, exponent, setCoefficient, setExponent, calculateDerivative }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Koefisien (C)</label>
        <input
          type="text"
          value={coefficient}
          onChange={(e) => setCoefficient(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Eksponen (n)</label>
        <input
          type="text"
          value={exponent}
          onChange={(e) => setExponent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <button
        onClick={calculateDerivative}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Hitung Turunan
      </button>
    </div>
  );
};

export default InputForm;
