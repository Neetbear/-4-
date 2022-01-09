import React, { useEffect, useState }   from "react";
import axios from 'axios';

export default function Mypage() {
  const [usermyPage, setUsermyPage] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/mypage").then((response)=>{
      setUsermyPage(response.data);
    })
  },[usermyPage])

  if ( window.localStorage.getItem("loginStatus") ) {
    return (
      <div>
          <h2>{window.localStorage.getItem("loginUser")}님의 MyPage</h2>
          <div>{usermyPage.userid}</div>
      </div>
    );
  } else {
      window.location.replace("/signin")
  };
}