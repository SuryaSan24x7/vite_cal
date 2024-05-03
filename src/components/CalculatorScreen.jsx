// CalculatorScreen.jsx
import React from 'react';

function CalculatorScreen({ input, result }) {
  return (<div>    <input
      type="text"
      value={input}
      className="calculator-screen"
      disabled/>
    {result && <p className="result">{result}</p>}
    </div>
  );
}

export default CalculatorScreen;
