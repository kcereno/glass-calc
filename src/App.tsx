import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [mainScreen, setMainScreen] = useState<string>('0');
  const [smallScreen, setSmallScreen] = useState<string>('');

  const [currentCount, setCurrentCount] = useState<string>('0');
  console.log('currentCount', currentCount);
  const [operation, setOperation] = useState<string>();
  const handleNumberButtonClick = (e: any) => {
    const enteredNumber = e.target.value;

    if (mainScreen === '0') return setMainScreen(enteredNumber);

    setMainScreen(mainScreen + enteredNumber);
  };

  const handleClearButtonClick = () => {
    setMainScreen('0');
    setSmallScreen('');
  };

  const handleEqualButtonClick = () => {
    setSmallScreen(currentCount + ' ' + operation + ' ' + mainScreen + ' =');
  };

  const handleOperationButtonClick = (e: any) => {
    const selectedOperation = e.target.value;
    setOperation('+');
    setCurrentCount(mainScreen);
    setSmallScreen(mainScreen + ' ' + selectedOperation);
    setMainScreen('0');
  };

  return (
    <div className="app">
      <div className="container">
        <div className="screen screen--small">{smallScreen}</div>
        <div className="screen screen--large">{mainScreen}</div>
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
          value=" x "
          onClick={handleOperationButtonClick}
        >
          x
        </button>
        <button
          className="button button--operation"
          value=" / "
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
          value=" - "
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
