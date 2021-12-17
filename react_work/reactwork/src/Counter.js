import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const a = number;
    const onIncrease = () => {
        setNumber(number + 1);
        // setNumber(prevNumver => prevNumver +1);
        console.log(number + "+1");
        console.log({number});
        console.log(a);
    };
    const onDecrease = () => {
        setNumber(number - 1);
        console.log(number + "-1");
        console.log({number});
    };
    return(
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
};

export default Counter;