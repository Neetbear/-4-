import React, { useState }  from "react";
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signin() {
    const [signinid, setSigninid] = useState('');
    const [signinpassword, setSigninpassword] = useState('');

    const onSigninidHandler = (event) => {
        setSigninid(event.currentTarget.value)
    }
    const onSigninpasswordHandler = (event) => {
        setSigninpassword(event.currentTarget.value)
    }

    const onSigninSubmitHandler = (event) => {
        fetchsignin();
        alert("로그인완료?")
    }
    const fetchsignin = async() => {
        const response = await axios.post("http://localhost:5000/api/signin", {
            signinid: signinid,
            signinpassword: signinpassword,
        });
        console.log(response.data);
    };
    
    let navigate = useNavigate();
    function signupClick() {
        navigate("/signup");
    }
    return(
        <>
            <h2>로그인</h2>
            <form onSubmit={onSigninSubmitHandler} method="POST">
                <label>아이디 : </label>
                <input type="text" value={signinid || ''} onChange={onSigninidHandler} placeholder="아이디를 입력하세요" />
                <br />
                <label>비밀번호 : </label>
                <input type="password" value={signinpassword || ''} onChange={onSigninpasswordHandler} placeholder="비밀번호를 입력하세요" />
                <br />
                <button type="submit">로그인</button>
                <button onclick={signupClick}>회원가입 하러가기</button>
            </form>
        </>
    );
};

export default Signin;