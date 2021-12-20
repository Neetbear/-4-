import React, { useState } from "react";

function Homework() {
    const [title1, setTitle1] = useState("Calc Result")
    const [numbers, setNumber] = useState({
        num1: '',
        num2: ''
    });
    const handleChange1 = (event) => {
        setNumber(values => ({...values, [event.target.name]: Number(event.target.value) }));
    };
    const onAdd = (event) => {
        event.preventDefault();
        setTitle1(numbers.num1+numbers.num2);
        console.log(numbers.num1+numbers.num2);
    };
    const onSub = (event) => {
        event.preventDefault();
        setTitle1(numbers.num1-numbers.num2);
        console.log(numbers.num1-numbers.num2);
    };
    const onMult = (event) => {
        event.preventDefault();
        setTitle1(numbers.num1*numbers.num2);
        console.log(numbers.num1*numbers.num2);
    };
    const onDivi = (event) => {
        event.preventDefault();
        setTitle1(numbers.num1/numbers.num2);
        console.log(numbers.num1/numbers.num2);
    };

    const [title2, setTitle2] = useState("Text add Result");
    const [texts, setText] = useState({
        text1: '',
        text2: ''
    });
    const handleChange2 = (event) => {
        setText(values => ({...values, [event.target.name]: event.target.value}));
    };
    const onAddString = (event) => {
        event.preventDefault();
        setTitle2(texts.text1+texts.text2);
    };
    return(
        <>  
            <form>
                <h1>{title1}</h1>
                <label>Enter Calc Number:
                    <input 
                        type="number"
                        name="num1"
                        value={numbers.num1 || ""}
                        onChange={handleChange1}
                    />
                    <input 
                        type="number"
                        name="num2"
                        value={numbers.num2 || ""}
                        onChange={handleChange1}
                    />
                </label>    
                <button onClick={onAdd}>Add</button>
                <button onClick={onSub}>Sub</button>
                <button onClick={onMult}>Mult</button>
                <button onClick={onDivi}>Divi</button>
            </form>
            <form>
                <h1>{title2}</h1>
                <label>Enter Your String:
                    <input 
                        type="text"
                        name="text1"
                        value={texts.text1 || ""}
                        onChange={handleChange2}
                    />
                    <input 
                        type="text"
                        name="text2"
                        value={texts.text2 || ""}
                        onChange={handleChange2}
                    />
                </label>
                <button onClick={onAddString}>AddString</button>
            </form>
        </>
    );
};

export default Homework;