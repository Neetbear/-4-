import React from "react";
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';
import { useEffect, useState} from 'react';
import Board from "./Board";
import styled from "styled-components";

function MainBoard() {
    const [viewContent , setViewContent] = useState([]);

    useEffect(()=>{
      Axios.get('http://localhost:5001/api/mainboard').then((response)=>{
        setViewContent(response.data);
      })
    },[viewContent])
  

return(
        <>
            <div className="App">
                <h1>Movie Review</h1>
                <div className='movie-container'>
                    {viewContent.map(element =>
                        <div className="title">
                            <h2>{element.title}</h2>
                            <div className="cont">
                                {ReactHtmlParser(element.content)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <a href="./board">
                <Button2>
                    글 쓰기
                </Button2>
            </a>
        </>
    )
}

export default MainBoard;

const Button2 = styled.button`
  width: 140px;
  border-radius: 5px;
  border: solid 1px #ffdcc5;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  color: #666666;
`;