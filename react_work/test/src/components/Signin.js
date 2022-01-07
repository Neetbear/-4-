import React, { useState }  from "react";
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signin() {
    let navigate = useNavigate();

    const [signinid, setSigninid] = useState('');
    const [signinpassword, setSigninpassword] = useState('');
    const [loginstate, setLoginstate] = useState('false');

    const onSigninidHandler = (event) => {
        setSigninid(event.currentTarget.value)
    }
    const onSigninpasswordHandler = (event) => {
        setSigninpassword(event.currentTarget.value)
    }

    const onSigninSubmitHandler = (event) => {
        event.preventDefault();
        fetchsignin();
    }
    const fetchsignin = async() => {
        const response = await axios.post("http://localhost:5000/api/signin", {
            signinid: signinid,
            signinpassword: signinpassword,
        })
            .then(setLoginstate("true"))
            .then(navigate("/"))
    };
    
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
            </form>
        </>
    );
};

export default Signin;