import React, { useState, useEffect } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import AOS from 'aos';

const KalkulatorTurunanTrigonometri = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // State untuk input dan hasil
  const [fungsi, setFungsi] = useState('');
  const [variabel, setVariabel] = useState('x');
  const [hasil, setHasil] = useState('');

  // Daftar fungsi trigonometri
  const trigonometriFungsi = [
    { nama: 'sin(x)', turunan: '\\cos(x)' },
    { nama: 'cos(x)', turunan: '-\\sin(x)' },
    { nama: 'tan(x)', turunan: '\\sec^2(x)' },
    { nama: 'csc(x)', turunan: '-\\csc(x)\\cot(x)' },
    { nama: 'sec(x)', turunan: '\\sec(x)\\tan(x)' },
    { nama: 'cot(x)', turunan: '-\\csc^2(x)' }
  ];

  // Fungsi hitung turunan
  const hitungTurunan = () => {
    // Validasi input
    if (!fungsi) {
      setHasil('Pilih fungsi trigonometri terlebih dahulu');
      return;
    }

    if (variabel !== 'x') {
      setHasil('Variabel harus menggunakan x');
      return;
    }

    // Cari fungsi trigonometri yang cocok
    const fungsiTerpilih = trigonometriFungsi.find(
      f => f.nama.replace('x', '') === fungsi.replace(variabel, '')
    );

    if (fungsiTerpilih) {
      // Buat ekspresi turunan
      const turunanFungsi = fungsiTerpilih.turunan.replace('x', variabel);
      setHasil(`\\frac{d}{d${variabel}}[${fungsi}] = ${turunanFungsi}`);
    } else {
      setHasil('Fungsi tidak valid');
    }
  };

  // Reset input dan hasil
  const reset = () => {
    setFungsi('');
    setVariabel('x');
    setHasil('');
  };

  return (
    <div id='turunanTrigonometri' className="min-h-screen bg-gray-100 dark:bg-gray-950 
      flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white 
        rounded-lg shadow-xl p-6 space-y-6" data-aos="fade-up"
        data-aos-duration="750">
        
        <h1 className="text-2xl font-bold text-center 
          text-blue-600">
          Kalkulator Turunan Trigonometri
        </h1>

        {/* Input Fungsi */}
        <div>
          <label className="block text-sm font-medium 
            text-black mb-2">
            Pilih Fungsi Trigonometri
          </label>
          <select
            value={fungsi}
            onChange={(e) => setFungsi(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Pilih Fungsi</option>
            {trigonometriFungsi.map((f, index) => (
              <option key={index} value={f.nama}>
                {f.nama}
              </option>
            ))}
          </select>
        </div>

        {/* Input Variabel */}
        <div>
          <label className="block text-sm font-medium 
            text-black mb-2">
            Variabel
          </label>
          <input
            type="text"
            value={variabel}
            onChange={(e) => setVariabel(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Masukkan variabel (harus : x)"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex space-x-4">
          <button
            onClick={hitungTurunan}
            className="w-full bg-green-500 font-bold text-white 
              py-2 rounded-lg hover:bg-green-600 transition"
          >
            Hitung Turunan
          </button>
          <button
            onClick={reset}
            className="w-full bg-red-500 font-medium text-white 
              py-2 rounded-lg hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>

        {/* Hasil Turunan */}
        {hasil && (
          <div className={`mt-6 p-2 rounded-lg text-center ${
            hasil.includes('tidak valid') || 
            hasil.includes('Pilih fungsi') || 
            hasil.includes('Variabel harus') 
              ? 'bg-red-100 text-red-700 border border-red-400' 
              : 'bg-green-100 text-green-700 border border-green-400'
          }`}>
            <h2 className={`text-lg font-semibold mb-2 ${
              hasil.includes('tidak valid') || 
              hasil.includes('Pilih fungsi') || 
              hasil.includes('Variabel harus') 
                ? 'text-red-700' 
                : 'text-green-700'
            }`}>
              Hasil Turunan:
            </h2>
            {hasil.includes('tidak valid') || 
             hasil.includes('Pilih fungsi') || 
             hasil.includes('Variabel harus') 
              ? <p>{hasil}</p>
              : <BlockMath>{hasil}</BlockMath>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default KalkulatorTurunanTrigonometri;