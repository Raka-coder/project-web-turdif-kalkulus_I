import React from "react";

const ResultDisplay = ({ result }) => {
  return (
    <div className="mt-6 text-center">
      <h2 className="text-lg font-medium">Hasil Turunan</h2>
      <p className="mt-2 text-xl">{result}</p>
    </div>
  );
};

export default ResultDisplay;
