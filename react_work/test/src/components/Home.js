import React, { Component }  from "react";
import { useNavigate } from "react-router-dom";

function Home () {
    let navigate = useNavigate();
    function signinClick() {
        navigate("/signin");
    }
    function signupClick() {
        navigate("/signup");
    }
    return (
        <div>
            <button onClick={signinClick}>
                로그인
            </button>
            <button onclick={signupClick}>
                회원가입
            </button>
        </div>
    );
}

export default Home;