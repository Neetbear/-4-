import React from "react";

function Home () {
    // let loginstate = window.localStorage.getItem("loginStatus").status;
    // let loginuser = window.localStorage.setItem("loginUser").user;
    // return (
    //     <div>
    //         <h1>Home</h1>
    //     </div>
    // );
    if ( window.localStorage.getItem("loginStatus") ) {
        return (
            <div>
                <h1>Home</h1>
                <b>{window.localStorage.getItem("loginUser")}님이 로그인 중입니다</b>
                <br/>
                <b>{window.localStorage.getItem("loginUserAddr")}</b>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    };
};

export default Home;