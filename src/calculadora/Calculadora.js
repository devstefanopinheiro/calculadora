import styles from './Calculadora.module.css';

import { useState } from 'react';

import logo from '../logo.svg';
import github from '../assets/imagens/github.png';

const Calculadora = () => {
  const [num, setNum] = useState(0);
  const [histNum, setHistNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState('');

  const handleClick = (e) => {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  };

  const handlePorcentage = () => {
    setNum(num / 100);
  };

  const handleOperator = (e) => {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  };

  const handleCalculation = () => {
    if (operator === '+') {
      setNum(parseFloat(num) + parseFloat(oldNum));
    } else if (operator === '-') {
      setNum(oldNum - num);
    } else if (operator === 'x') {
      setNum(oldNum * num);
    } else if (operator === '/') {
      setNum(oldNum / num);
    }
    setHistNum(num);
  };

  const handleClear = () => {
    setNum(0);
    setOldNum(0);
    setHistNum(0);
    setOperator('');
  };

  return (
    <div className={styles.calculadora}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.display}>
        <h3>
          {oldNum > 0 && `${oldNum} `}
          {operator !== '' && `${operator} `}
          {histNum > 0 && `${histNum} = ${num}`}
        </h3>
        <hr />
        <h2>{num}</h2>
      </div>
      <div className={styles.botoes}>
        <button className={styles.orange} onClick={handleClear}>
          C
        </button>
        <button onClick={handlePorcentage} className={styles.white} value={'%'}>
          %
        </button>
        <button className={styles.white} onClick={handleOperator} value={'/'}>
          /
        </button>
        <button onClick={handleClick} value={7}>
          7
        </button>
        <button onClick={handleClick} value={8}>
          8
        </button>
        <button onClick={handleClick} value={9}>
          9
        </button>
        <button className={styles.white} onClick={handleOperator} value={'x'}>
          X
        </button>
        <button onClick={handleClick} value={4}>
          4
        </button>
        <button onClick={handleClick} value={5}>
          5
        </button>
        <button onClick={handleClick} value={6}>
          6
        </button>
        <button className={styles.white} onClick={handleOperator} value={'-'}>
          -
        </button>
        <button onClick={handleClick} value={1}>
          1
        </button>
        <button onClick={handleClick} value={2}>
          2
        </button>
        <button onClick={handleClick} value={3}>
          3
        </button>
        <button className={styles.white} onClick={handleOperator} value={'+'}>
          +
        </button>
        <button onClick={handleClick} value={0}>
          0
        </button>
        <button
          onClick={() => {
            setNum(num + '.');
          }}
          value={'.'}
        >
          .
        </button>
        <button
          className={styles.white}
          onClick={handleCalculation}
          value={'='}
        >
          =
        </button>
      </div>
      <a href="https://github.com/devstefanopinheiro">
        <img src={github} alt="logo github" />
        <span>Calculadora - Stefano</span>
      </a>
    </div>
  );
};

export default Calculadora;
