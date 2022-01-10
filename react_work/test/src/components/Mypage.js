import React, { useEffect, useState }   from "react";
import axios from 'axios';

export default function Mypage() {
  const [usermyPage, setUsermyPage] = useState([]);
  
  useEffect(()=>{
    axios.post("http://localhost:5000/api/mypage", {
      signinid: window.localStorage.getItem("loginUser"),
  }).then((response)=>{
      setUsermyPage(response.data);
    })
  })

  if ( window.localStorage.getItem("loginStatus") ) {
    return (
      <div>
          <h2>{window.localStorage.getItem("loginUser")}님의 MyPage</h2>
          <div>ID: {usermyPage.userid}</div>
          <div>NickName: {usermyPage.usernickname}</div>
          <div>E-mail: {usermyPage.useremail}</div>
          <div>Phonenumber: {usermyPage.userphonenumber}</div>
          <div>Address: {usermyPage.useraddress} {usermyPage.useraddressdetail}</div>
      </div>
    );
  } 
  // else {
  //     window.location.replace("/signin")
  // };
}