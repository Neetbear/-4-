import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
    const [result, setResult] = useState('');
    
    const changeHandler = e => {
        setResult(result + e.target.value);
    }

    const calcHandler = () =>{
        setResult(eval(result));
    };
    const resetHandler = () =>{
        setResult('');
    };

    return(
        <div className="hassle-box">
            <h2>React Calculator</h2>
            <input 
                className="display"
                name={result}
                value={result || 0}
                readOnly
            />
            <div className="hassle">
                <button onClick={changeHandler} value="9">9</button>
                <button onClick={changeHandler} value="8">8</button>
                <button onClick={changeHandler} value="7">7</button>
                <button onClick={changeHandler} value="*">*</button>
            </div>
            <div className="hassle">
                <button onClick={changeHandler} value="6">6</button>
                <button onClick={changeHandler} value="5">5</button>
                <button onClick={changeHandler} value="4">4</button>
                <button onClick={changeHandler} value="+">+</button>
            </div>
            <div className="hassle">
                <button onClick={changeHandler} value="3">3</button>
                <button onClick={changeHandler} value="2">2</button>
                <button onClick={changeHandler} value="1">1</button>
                <button onClick={changeHandler} value="-">-</button>
            </div>
            <div className="hassle">
                <button onClick={changeHandler} value="0">0</button>
                <button onClick={changeHandler} value=".">.</button>
                <button onClick={calcHandler}>=</button>
                <button onClick={changeHandler} value="/">/</button>
            </div>
            <div>
                <button className="hassleBtn" onClick={resetHandler}>Clear</button>
            </div>
        </div>
    );
};