// useState는 this.setState를 대신하는 용도
import React, { useState } from 'react';

function Gundam (props) {
    let state = {
        camp: "Earth",
        model: "X10A",
        engine: "Atomic",
        year: "Cosmic 70",
        pilot: "Yamato"
    };
    
    const [model, setMessage] = useState("X10A");
    const changeModel = () => setMessage("X109 Justice");

    return (
        <div>
            <h1>{model}</h1>
            <h2>The camp is {state.camp}</h2>
            <h2>The engine is {state.engine}</h2>
            <h2>The Pilot name is {state.pilot}</h2>
            <h2>{state.year} Space Centry</h2>
            <h2>The Cargo is {props.cargo}</h2>
            <button type="button" onClick={changeModel}>Change Model</button>
        </div>
    );
}

export default Gundam;