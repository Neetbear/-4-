import React, { useEffect, useState, useRef  } from 'react';

// useEffect로 lifecycle 메소드들 대신한다
// function Headercomp () {
//     const [headertitel, setMessage] = useState("This is My page of header");
    

//     useEffect(()=>{
//         setTimeout(() => {setMessage("componentDidMount title!!!")}, 5000);
//     }, [])

//     return (<h1>{headertitel}</h1>)
// }

function Headercomp (props) {
    const [headertitle, setMessage] = useState("This is My page of header");
    // ref는 prev 대신
    const ref = useRef(headertitle);
    const refProps = useRef(props.newTitle);
    // show는 개빡쳐서 쓴 꼼수 정상적인 방법 찾아보기
    // setstate진행후에 변하고 나서 나타나는 componentDidUpdate를 사용할라는데
    // this.setState라는 반응 후에 나타나게 하는 방법을 못찾아서 쓴 꼼수
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