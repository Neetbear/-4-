import React from "react";
import Hello from "./Hello";
import './Jsxcss.css'

function Jsxcss() {
    let name = 'react';
    const mystyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 24, //default 단위 px임(픽셀)
        padding: '1rem'
    };
    return(
        <>  
            {/*==jsc 주석==*/}
            /*==jsc 주석==*/
            <Hello />
            <div style={mystyle}>{name}</div>
            <div className="pink-box"></div>
        </>
    );
};

export default Jsxcss;