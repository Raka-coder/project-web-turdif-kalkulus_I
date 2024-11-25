import { useState, useEffect } from 'react';
import { derivative } from 'mathjs';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import AOS from 'aos';

const DerivativeCalculator = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [expression, setExpression] = useState('');
  const [variable, setVariable] = useState('x');
  const [latexResult, setLatexResult] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Fungsi validasi input
  const validateInput = () => {
    // Cek apakah ekspresi kosong
    if (!expression.trim()) {
      setIsValid(false);
      setError('Masukkan ekspresi terlebih dahulu');
      return false;
    }

    // Validasi ekspresi sederhana
    const validExpressionRegex = /^[a-zA-Z0-9\+\-\*\/\^\(\)\.]+$/;
    if (!validExpressionRegex.test(expression)) {
      setIsValid(false);
      setError('Ekspresi mengandung karakter tidak valid');
      return false;
    }

    setIsValid(true);
    setError('');
    return true;
  };

  const calculateDerivative = () => {
    // Lakukan validasi input
    if (!validateInput()) return;

    try {
      const derivativeResult = derivative(expression, variable);
      
      // Konversi ke LaTeX
      const latexExpression = derivativeResult.toTex({
        parenthesis: 'keep',
        implicit: 'show'
      });

      setLatexResult(latexExpression);
      setError('');
      setIsValid(true);
    } catch (err) {
      setError('Ekspresi tidak valid');
      setLatexResult('');
      setIsValid(false);
      console.error(err);
    }
  };

  const buttons = [
    '7', '8', '9', 'x', 'sin',
    '4', '5', '6', '+', 'cos',
    '1', '2', '3', '-', 'tan',
    '0', '.', '^', '*', 'log'
  ];

  const handleButtonClick = (value) => {
    setExpression(prev => prev + value);
    setIsValid(true);
    setError('');
  };

  const clearExpression = () => {
    setExpression('');
    setLatexResult('');
    setError('');
    setIsValid(true);
  };

  return (
    <MathJaxContext>
    <div id='turunan' className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-all duration-300 ease-in-out flex items-center justify-center p-4 pt-36">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md"  data-aos="fade-up"
          data-aos-duration="750">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Kalkulator Turunan
        </h1>

        {/* Expression Input */}
        <div className="mb-4">
          <input
            type="text"
            value={expression}
            onChange={(e) => {
              setExpression(e.target.value);
              setIsValid(true);
              setError('');
            }}
            placeholder="Masukkan Angka"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Variable Selection */}
        <div className="mb-4 flex items-center">
          <label className="mr-2 font-medium">Variabel :</label>
          <select
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
            className="border rounded-lg px-2 py-1.5 font-medium border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
          >
            <option value="x" className='font-medium'>x</option>
            <option value="y" className='font-medium'>y</option>
            <option value="z" className='font-medium'>z</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={clearExpression}
            className="bg-red-500 text-white font-medium p-2 rounded-lg hover:bg-red-600 col-span-2"
          >
            Reset
          </button>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateDerivative}
          className="w-full bg-green-500 text-white font-medium p-2 rounded-lg hover:bg-green-600 mb-4"
        >
          Hitung Turunan
        </button>

        {/* Result Display */}
        {(error || latexResult) && (
          <div className={`p-4 rounded-lg mb-4 ${
            isValid 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {error ? (
              <div>{error}</div>
            ) : (
              <>
                <strong>Hasil Turunan : </strong> 
                <MathJax inline>
                  {`\\(${latexResult}\\)`}
                </MathJax>
              </>
            )}
          </div>
        )}
        </div>
      </div>
    </MathJaxContext>
  );
};

export default DerivativeCalculator;