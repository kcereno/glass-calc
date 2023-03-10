import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [mainScreenVal, setMainScreenVal] = useState<string>('0');
  const [secondScreenVal, setSecondScreenVal] = useState<string>('');
  const [count, setCount] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [storedNumber, setStoredNumber] = useState<number | null>(null);
  const [endOfCalculation, setEndOfCalculation] = useState<boolean>(false);

  useEffect(() => {
    if (mainScreenVal.length > 10) {
      setMainScreenVal(mainScreenVal.slice(0, 10));
    }
  }, [mainScreenVal]);

  // Helper Functions
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

    if (endOfCalculation) {
      setMainScreenVal(selectedNumber);
      setEndOfCalculation(false);
      setCount(null);
      setSecondScreenVal('');
      return;
    }

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

    if (endOfCalculation) setEndOfCalculation(false);

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
    setStoredNumber(null);
  };

  const handleEqualButtonClick = () => {
    if (count && operation) {
      const updatedCount = calculate(count, operation, +mainScreenVal);
      setCount(updatedCount);

      setMainScreenVal(updatedCount.toString());
      setSecondScreenVal(secondScreenVal + ' ' + mainScreenVal + ' = ');
      setOperation(null);
      setEndOfCalculation(true);
    }
  };

  const handleNegativeButtonClick = () => {
    let updatedMainScreenVal;

    mainScreenVal[0] === '-'
      ? (updatedMainScreenVal = mainScreenVal.slice(1))
      : (updatedMainScreenVal = '-' + mainScreenVal);

    setMainScreenVal(updatedMainScreenVal);
  };

  const handleMemoryStoreButtonClick = () => {
    if (!storedNumber) {
      setStoredNumber(+mainScreenVal);
    } else {
      setMainScreenVal(storedNumber.toString());
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="screen screen--small">
          <span className="screen__text">{secondScreenVal}</span>
        </div>
        <div className="screen screen--large">
          <span className="screen__text">{mainScreenVal}</span>
        </div>
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
        <button
          className="button button--misc"
          onClick={handleNegativeButtonClick}
        >
          +/-
        </button>
        <button
          className="button button--misc"
          onClick={handleMemoryStoreButtonClick}
        >
          {storedNumber ? 'MR' : 'MS'}
        </button>
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
          ??
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
      <div className="credit-text">Karl Cereno {new Date().getFullYear()}</div>
    </div>
  );
}

export default App;
