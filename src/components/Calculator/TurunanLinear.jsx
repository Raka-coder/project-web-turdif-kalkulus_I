// src/Calculator.js
import React, { useState } from 'react';

const TurunanLinear = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const calculateDerivative = () => {
    const regex = /^(-?\d*)x\s*([+-]\s*\d+)?$/;
    const match = input.replace(/\s+/g, '').match(regex);

    if (match) {
      const coefficient = match[1] === '' || match[1] === '-' ? (match[1] === '-' ? -1 : 1) : parseInt(match[1]);
      const derivative = `${coefficient}`;
      setResult(`Turunan dari ${input} adalah ${derivative}`);
    } else {
      setResult('Format input tidak valid. Gunakan format ax + b.');
    }
  };

  const handleReset = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Kalkulator Turunan Fungsi Linear</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Masukkan fungsi (ax + b)"
        className="p-2 border border-gray-300 rounded mb-4 w-80"
      />
      <div className="flex space-x-4">
        <button
          onClick={calculateDerivative}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Hitung Turunan
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  );
};

export default TurunanLinear;