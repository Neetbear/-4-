import React, { Component }  from "react";
import { useNavigate } from "react-router-dom";

function Home () {
    let navigate = useNavigate();
    function signupClick() {
        navigate("/signup");
    }
    function signinClick() {
        navigate("/signin");
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