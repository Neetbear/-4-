import React from "react";

function Signin({}) {

    return(
        <form action='signin'>
            <input type="text" className="userid" placeholder="ID를 입력하세요" require />
            <br />
            <input type="password" className="userpassword" placeholder="비밀번호를 입력하세요" require />
            <br />
            <input type="password" className="checkpassword" placeholder="비밀번호를 입력하세요" require />
            <br />
            <input type="text" className="userid" placeholder="닉네임을 입력하세요" require />
            <br />
            <input type="text" className="userid" placeholder="이메일을 입력하세요" require />
            <br />
            <input type="text" className="userid" placeholder="핸드폰 번호를 입력하세요" require />
            <br />
            <input type="text" className="userid" placeholder="주소를 입력하세요" require />
            <br />
            <input type="text" className="userid" placeholder="세부 주소를 입력하세요" require />
            <br />
            <input type="text" className="userid" placeholder="카테고리를 선택하세요" require />
            <br />
            <button type="submit"></button>
        </form>
    );
};

export default Signin;