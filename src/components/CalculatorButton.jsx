// CalculatorButton.jsx
import React from 'react';

function CalculatorButton({ onClick, label, extraClass }) {
  return (
    <button onClick={onClick} className={`calculator-button ${extraClass || ''}`}>
      {label}
    </button>
  );
}

export default CalculatorButton;
