import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ['+', '-', '*', '/', '.'];

  const updateCalc = value => {

    if (operators.includes(value) && calc === '' ||operators.includes(value) && operators.includes(calc.slice(-1)))
    {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }

  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const clearDisplay = () => {
    setCalc("");
    setResult("");
  }
  

  const createCalculatrDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }

    return digits;

  }

  return (
    <div className="App">

      <div className="title">
        React Calculator
      </div>

      <div className="calculator">

        <div className="display">
          {result ?  <span>({result})</span> : ''}
          {calc || "0" }
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('/')}>/</button>

          <button onClick={clearDisplay}>DEL</button>
        </div>

        <div className="digits">
          {createCalculatrDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>

          <button onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
