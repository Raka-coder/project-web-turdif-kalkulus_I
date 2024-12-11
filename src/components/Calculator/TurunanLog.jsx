import React, { useState, useMemo, useEffect } from 'react';
import * as math from 'mathjs';
import * as nerdamer from 'nerdamer';
import 'nerdamer/nerdamer.core';
import AOS from 'aos';



class UniversalDerivativeCalculator {
  constructor() {
    this.engines = [
      {
        name: 'mathjs',
        derive: (expr) => {
          try {
            return math.derivative(expr, 'x').toString();
          } catch (error) {
            return null;
          }
        }
      },
      {
        name: 'nerdamer',
        derive: (expr) => {
          try {
            return nerdamer.diff(expr, 'x').toString();
          } catch (error) {
            return null;
          }
        }
      }
    ];
  }

  calculateDerivative(expression) {
    if (!this.isValidExpression(expression)) {
      throw new Error('Ekspresi tidak valid');
    }

    for (let engine of this.engines) {
      const result = engine.derive(expression);
      if (result) return result;
    }

    return this.manualDifferentiation(expression);
  }

  isValidExpression(expr) {
    const validationRegex = /^[a-zA-Z0-9+\-*/^().\s]+$/;
    return validationRegex.test(expr);
  }

  manualDifferentiation(expression) {
    // Aturan manual untuk turunan campuran
    const rules = [
      { 
        pattern: /(\w+)\*(\w+)/, // Aturan untuk produk
        derive: (match) => `d(${match[1]})/dx * ${match[2]} + ${match[1]} * d(${match[2]})/dx`
      },
      { 
        pattern: /(\w+)\/(\w+)/, // Aturan untuk pembagian
        derive: (match) => `(d(${match[1]})/dx * ${match[2]} - ${match[1]} * d(${match[2]})/dx) / (${match[2]})^2`
      },
      { 
        pattern: /ln\((.*)\)/,
        derive: (match) => `1/${match[1]} * d(${match[1]})/dx`
      },
      { 
        pattern: /log\((.*)\)/,
        derive: (match) => `1/(${match[1]} * ln(10)) * d(${match[1]})/dx`
      },
      { 
        pattern: /sin\((.*)\)/,
        derive: (match) => `cos(${match[1]}) * d(${match[1]})/dx`
      },
      { 
        pattern: /cos\((.*)\)/,
        derive: (match) => `-sin(${match[1]}) * d(${match[1]})/dx`
      },
      { 
        pattern: /tan\((.*)\)/,
        derive: (match) => `sec^2(${match[1]}) * d(${match[1]})/dx`
      },
      { 
        pattern: /e\^(\w+)/,
        derive: (match) => `e^(${match[1]}) * d(${match[1]})/dx`
      },
      { 
        pattern: /(\w+)\^(\d+)/,
        derive: (match) => `${match[2]} * ${match[1]}^(${match[2] - 1}) * d(${match[1]})/dx`
      }
    ];

    for (let rule of rules) {
      const match = expression.match(rule.pattern);
      if (match) {
        return rule.derive(match);
      }
    }

    return 'Tidak dapat menghitung turunan';
  }

  analyzeComplexity(expression) {
    return {
      length: expression.length,
      complexity: this.calculateComplexityScore(expression)
    };
  }

  calculateComplexityScore(expression) {
    let score = 0;
    const complexityFactors = [
      { pattern: /\^/, weight: 2 },
      { pattern: /ln|log|sin|cos|tan/, weight: 3 },
      { pattern: /\(.*\)/, weight: 1.5 },
      { pattern: /\*/, weight: 1 },
      { pattern: /\//, weight: 1 }
    ];

    complexityFactors.forEach(factor => {
      if (factor.pattern.test(expression)) {
        score += factor.weight;
      }
    });

    return score;
  }
}

function KalkulatorTurunanCampuran() {
  useEffect(() => {
    AOS.init();
  }, []);

    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
  
    const calculator = useMemo(() => new UniversalDerivativeCalculator(), []);
  
    const handleCalculate = () => {
      try {
        // Hitung turunan
        const derivative = calculator.calculateDerivative(expression);
        
        setResult(derivative);
        setError(null);
      } catch (err) {
        setError(err.message);
        setResult(null);
      }
    };
  
    // Fungsi reset
    const handleReset = () => {
      setExpression('');
      setResult(null);
      setError(null);
    };
  
    // Daftar tombol untuk input cepat
    const quickInputButtons = [
      'x', '^', 'ln', 'log', 
      'sin', 'cos', 'tan', 
      '+', '-', '*', '/'
    ];
  
    return (
        <div id='turunanCampuran' className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-all duration-300 ease-in-out flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up"
        data-aos-duration="750">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Kalkulator Turunan Campuran
          </h1>
  
          {/* Input Ekspresi */}
          <div className="mb-4">
            <input 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              placeholder="Masukkan ekspresi matematika"
            />
          </div>
  
          {/* Tombol Input Cepat */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {quickInputButtons.map((btn) => (
              <button 
                key={btn}
                className="bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-lg"
                onClick={() => setExpression(prev => prev + btn)}
              >
                {btn}
              </button>
            ))}
          </div>
  
          {/* Kontainer Tombol */}
          <div className="flex space-x-4 mb-4">
            {/* Tombol Hitung */}
            <button 
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              onClick={handleCalculate}
            >
              Hitung Turunan
            </button>
  
            {/* Tombol Reset */}
            <button 
              className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
  
          {/* Tampilan Error */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}
  
          {/* Hasil Turunan */}
          {result && (
            <div className="bg-green-50 border border-green-200 p-4 rounded mb-4">
              <h2 className="font-semibold text-lg mb-2 text-green-800">Hasil Turunan:</h2>
              <p className="text-green-800">{result}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default KalkulatorTurunanCampuran;
