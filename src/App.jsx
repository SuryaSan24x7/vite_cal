import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import CalculatorScreen from './components/CalculatorScreen';
import CalculatorButton from './components/CalculatorButton';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef('');

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key)
      const key = event.key;
      if (/\d/.test(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
       setInput((prevInput) => prevInput + key);
      } else if (key === 'Enter') {
        evaluateExpression();
      } else if (key === 'Delete') {
        clearInput();
      } else if (key === 'Backspace') {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else if (key === '(' || key === ')') {
        setInput((prevInput) => prevInput + key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const evaluateExpression = () => {
    try {
      const result = eval(inputRef.current);
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      evaluateExpression();
    } else if (value === 'C') {
      clearInput();
    } else if (value === 'sin') {
      setInput('Math.sin(');
    } else if (value === 'cos') {
      setInput('Math.cos(');
    } else if (value === 'tan') {
      setInput('Math.tan(');
    } else if (value === 'sqrt') {
      setInput('Math.sqrt(');
    } else if (value === 'cube') {
      setInput('Math.pow(');
    } else if (value === 'cbrt') {
      setInput(input*input*input);
    } else if (value === 'log10') {
      setInput('Math.log10(');
    } else if (value === 'ln') {
      setInput('Math.log(');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <CalculatorScreen input={input} result={result} />
      <div className="calculator-buttons">
        <CalculatorButton onClick={() => handleButtonClick('C')} label="C" extraClass="btn-clear" />
        <CalculatorButton onClick={() => handleButtonClick('/')} label="/" extraClass="btn-operator" />
        <CalculatorButton onClick={() => handleButtonClick('*')} label="*" extraClass="btn-operator" />
        <CalculatorButton onClick={() => handleButtonClick('-')} label="-" extraClass="btn-operator" />
        <CalculatorButton onClick={() => handleButtonClick('7')} label="7" />
        <CalculatorButton onClick={() => handleButtonClick('8')} label="8" />
        <CalculatorButton onClick={() => handleButtonClick('9')} label="9" />
        <CalculatorButton onClick={() => handleButtonClick('+')} label="+" extraClass="btn-operator" />
        <CalculatorButton onClick={() => handleButtonClick('4')} label="4" />
        <CalculatorButton onClick={() => handleButtonClick('5')} label="5" />
        <CalculatorButton onClick={() => handleButtonClick('6')} label="6" />
        <CalculatorButton onClick={() => handleButtonClick('=')} label="=" extraClass="btn-operator" />
        <CalculatorButton onClick={() => handleButtonClick('1')} label="1" />
        <CalculatorButton onClick={() => handleButtonClick('2')} label="2" />
        <CalculatorButton onClick={() => handleButtonClick('3')} label="3" />
        <CalculatorButton onClick={() => handleButtonClick('0')} label="0" />
        <CalculatorButton onClick={() => handleButtonClick('.')} label="." />
        <CalculatorButton onClick={() => handleButtonClick('(')} label="(" />
        <CalculatorButton onClick={() => handleButtonClick(')')} label=")" />
        <CalculatorButton onClick={() => handleButtonClick('sin')} label="sin" />
        <CalculatorButton onClick={() => handleButtonClick('cos')} label="cos" />
        <CalculatorButton onClick={() => handleButtonClick('tan')} label="tan" />
        <CalculatorButton onClick={() => handleButtonClick('sqrt')} label="√" />
        <CalculatorButton onClick={() => handleButtonClick('cube')} label="x^3" />
        <CalculatorButton onClick={() => handleButtonClick('cbrt')} label="∛" />
        <CalculatorButton onClick={() => handleButtonClick('log10')} label="log10" />
        <CalculatorButton onClick={() => handleButtonClick('ln')} label="ln" />
      </div>
    </div>
  );
}

export default App;
