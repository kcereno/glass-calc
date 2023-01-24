import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [mainScreenVal, setMainScreenVal] = useState<string>('0');
  const [secondScreenVal, setSecondScreenVal] = useState<string>('');
  const [count, setCount] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  // utils

  const calculate = (
    firstNumber: number,
    operation: string,
    secondNumber: number
  ): number => {
    if (operation === '+') return firstNumber + secondNumber;
    if (operation === '-') return firstNumber - secondNumber;
    if (operation === 'x') return firstNumber * secondNumber;

    return firstNumber / secondNumber;
  };

  // Event Handlers

  const handleNumberButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const target = e.target as HTMLButtonElement;

    const selectedNumber = target.value;

    mainScreenVal === '0'
      ? setMainScreenVal(selectedNumber)
      : setMainScreenVal(mainScreenVal + selectedNumber);
  };

  const handleOperationButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedOperation = (e.target as HTMLButtonElement).value;

    let updatedSecondScreenVal = secondScreenVal;
    let updatedCount = count;

    if (count && operation) {
      updatedCount = calculate(count, operation, +mainScreenVal);
      updatedSecondScreenVal = `${updatedCount} ${selectedOperation}`;
    } else {
      updatedCount = +mainScreenVal;
      updatedSecondScreenVal = `${mainScreenVal} ${selectedOperation}`;
    }

    setCount(updatedCount);
    setOperation(selectedOperation);
    setSecondScreenVal(updatedSecondScreenVal);
    setMainScreenVal('0');
  };

  const handleClearButtonClick = () => {
    setMainScreenVal('0');
    setSecondScreenVal('');
    setCount(null);
  };

  const handleEqualButtonClick = () => {
    if (count && operation) {
      const updatedCount = calculate(count, operation, +mainScreenVal);
      setCount(updatedCount);

      setMainScreenVal(updatedCount.toString());
      setSecondScreenVal(secondScreenVal + ' ' + mainScreenVal + ' = ');
      setOperation(null);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="screen screen--small">{secondScreenVal}</div>
        <div className="screen screen--large">{mainScreenVal}</div>
        <button
          className="button"
          value="7"
          onClick={handleNumberButtonClick}
        >
          7
        </button>
        <button
          className="button"
          value="8"
          onClick={handleNumberButtonClick}
        >
          8
        </button>
        <button
          className="button"
          value="9"
          onClick={handleNumberButtonClick}
        >
          9
        </button>
        <button className="button button--misc">+/-</button>
        <button className="button button--misc">MR</button>
        <button
          className="button"
          value="4"
          onClick={handleNumberButtonClick}
        >
          4
        </button>
        <button
          className="button"
          value="5"
          onClick={handleNumberButtonClick}
        >
          5
        </button>
        <button
          className="button"
          value="6"
          onClick={handleNumberButtonClick}
        >
          6
        </button>
        <button
          className="button button--operation"
          value="x"
          onClick={handleOperationButtonClick}
        >
          x
        </button>
        <button
          className="button button--operation"
          value="/"
          onClick={handleOperationButtonClick}
        >
          ÷
        </button>
        <button
          className="button"
          value="1"
          onClick={handleNumberButtonClick}
        >
          1
        </button>
        <button
          className="button"
          value="2"
          onClick={handleNumberButtonClick}
        >
          2
        </button>
        <button
          className="button"
          value="3"
          onClick={handleNumberButtonClick}
        >
          3
        </button>
        <button
          className="button button--operation"
          onClick={handleOperationButtonClick}
          value="-"
        >
          -
        </button>
        <button
          className="button button--equal"
          onClick={handleEqualButtonClick}
        >
          =
        </button>
        <button
          className="button button--clear"
          onClick={handleClearButtonClick}
        >
          C
        </button>
        <button
          className="button"
          value="0"
          onClick={handleNumberButtonClick}
        >
          0
        </button>
        <button className="button">.</button>
        <button
          className="button button--operation"
          value="+"
          onClick={handleOperationButtonClick}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
