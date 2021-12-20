import React, { useState } from "react";

function Homework() {
    const [title2, setTitle2] = useState("Text add Result");
    
    // 이부분이 단순히 document.getElementById같은걸로 찾아와서 쓰는게 아니라 데이터(state)에 담아두고 쓰는 역할?쯤이라고 생각하는게 편하나?
    // const [texts, setText] = useState({
    //     text1: '',
    //     text2: ''
    // });
    // const handleChange2 = (event) => {
    //     setText(values => ({...values, [event.target.name]: event.target.value}));
    // };

    // 극단적인 이해를 돕기위한 구조
    // onchange 생략 usestete 간단히
    // 이런식으로 만들었던 것들 더 잘써먹을라고 react에선 구조가 변한거임
    // 참고로 name은 selector 역할 불가능해서 id로 바꿔둔거임 -> 즉 찾아도 selector 아니라서 value값을 못읽음
    // name쓰면 그냥 읽는게 아니라 name:v-alue 세트로 읽어오게 해줘야된다
    const onAddString = (event) => {
        event.preventDefault();
        console.log(document.getElementById("text1").value)
        setTitle2(document.getElementById("text1").value+document.getElementById("text2").value);
        // 이부분은 버튼 누르면 input 창은 다시 빈칸으로 만들고 싶다는 요청에 의해 만들어짐
        document.getElementById("text1").value = '';
        document.getElementById("text2").value = '';
    };
    return(
        <>  
            <form>
                <h1>{title2}</h1>
                <label>Enter Your String:
                    <input
                        type="text"
                        id="text1"
                        // name="text1"
                        // value={texts.text1 || ""}
                        // onChange={handleChange2}
                    />
                    <input 
                        type="text"
                        id="text2"
                        // name="text2"
                        // value={texts.text2 || ""}
                        // onChange={handleChange2}
                    />
                </label>
                <button onClick={onAddString}>AddString</button>
            </form>
        </>
    );
};

export default Homework;