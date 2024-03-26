'use client'

import { evaluate, forEach } from 'mathjs';
import { useState } from 'react';


const Calculator = () => {
  let expression = '{ 5 * 6 + 5 * [ 38 - ( 5 * 2 + 20 ) ] - 5 * 2 } / ( 7 * 2 - 4 )';
  const [result, setResult] = useState('');

  const calculate = () => {
    // TODO : Aggiungere un controllo sull'espressione perchè math.js vuole solo parentesi tonde per il calcolo
    const brackets = [
      { start: /\{ | \[/g, toReplace: '(' },
      { start: /\} | \]/g, toReplace: ')' }
    ];


    brackets.forEach(el => {
      expression = expression.replace(el.start, el.toReplace);
    });
    setResult(evaluate(expression));
  };

  return (
    <div>
      <p>{expression}</p>
      <button onClick={calculate}>Calcola</button>
      <div>Il risultato è: {result}</div>
    </div>
  );
}

export default Calculator;