import React, { useEffect, useState, useRef  } from 'react';

function Headercomp (props) {
    const [headertitle, setMessage] = useState("This is My page of header");
    const ref = useRef(headertitle);
    const refProps = useRef(props.newTitle);

    const [show, setShow] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setMessage("componentDidMount title!!!");
            setShow(true);
        }, 2000);
    }, [])
    
    useEffect(()=>{
        if(show) {
            document.getElementById("div1").innerHTML = 
            "Before update title is " + ref.current + ", Before update newtitle is " + refProps.current;
            document.getElementById("div2").innerHTML = 
            "The update title is " + headertitle;    
        }
    })
    
    return (
        <div>
            <h1>{headertitle}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
    );
}

export default Headercomp;