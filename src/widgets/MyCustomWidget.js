import React, { useState } from 'react';
import '../styles/styles.css';

export default function CalculatorWidget() {
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        setExpression(prevExpression => prevExpression + value);
    };

    const handleBackspace = () => {
        setExpression(prevExpression => prevExpression.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            const result = new Function(`return ${expression}`)();
            setExpression(result.toString());
        } catch (error) {
            console.error('Invalid expression');
        }
    };

    const handleClear = () => {
        setExpression('');
    };

    return (
        <div className="calculator-widget">
            <input type="text" value={expression} readOnly />
            <div className="calculator-grid">
                <button className="calculator-button" onClick={() => handleButtonClick('7')}>7</button>
                <button className="calculator-button" onClick={() => handleButtonClick('8')}>8</button>
                <button className="calculator-button" onClick={() => handleButtonClick('9')}>9</button>
                <button className="calculator-button operator-button" onClick={() => handleButtonClick('+')}>+</button>
                <button className="calculator-button" onClick={() => handleButtonClick('4')}>4</button>
                <button className="calculator-button" onClick={() => handleButtonClick('5')}>5</button>
                <button className="calculator-button" onClick={() => handleButtonClick('6')}>6</button>
                <button className="calculator-button operator-button" onClick={() => handleButtonClick('-')}>-</button>
                <button className="calculator-button" onClick={() => handleButtonClick('1')}>1</button>
                <button className="calculator-button" onClick={() => handleButtonClick('2')}>2</button>
                <button className="calculator-button" onClick={() => handleButtonClick('3')}>3</button>
                <button className="calculator-button operator-button" onClick={() => handleButtonClick('*')}>*</button>
                <button className="calculator-button zero-button" onClick={() => handleButtonClick('0')}>0</button>
                <button className="calculator-button" onClick={() => handleButtonClick('.')}>.</button>
                <button className="calculator-button operator-button" onClick={() => handleButtonClick('/')}>/</button>
                <button className="calculator-button clear-button" onClick={handleClear}>Clear</button>
                <button className="calculator-button backspace-button" onClick={handleBackspace}><span className="backspace-icon">&#9003;</span></button>
                <button className="calculator-button calculate-button" onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
}
