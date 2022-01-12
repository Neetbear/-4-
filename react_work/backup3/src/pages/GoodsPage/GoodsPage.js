import React, { useEffect, useState } from "react";
import Axios from "axios";
import './GoodsPage.css'
import { IoShareOutline } from 'react-icons/io5';
import { IoMdMore } from 'react-icons/io';

function GoodsPage() {
  const [goodsPage, setGoodsPage] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:5001/api/goodspage/:goods_number').then((response)=>{
      setGoodsPage(response.data);
    })
  },[goodsPage])

  return(
      <div className="GoodsPgTemplate">
        {goodsPage.map(element =>
          <>    
          <div className="GoodsPgNav">
            <IoShareOutline />
            <IoMdMore />
            {/* <div><a href="/goodspage/delete/:goods_number">삭제</a></div> */}
            {/* <div><a href="/goodspage/delete/:goods_number">수정</a></div> */}
          </div>
          <div className="GoodsImages">
            <img src={element.goods_img.split("#")} />
          </div>
          <div className="GoodsPgUserInfo">
            <div className="GoodsPgUserInfoLeft">
              <div className="GoodsPgUserImg" />이미지
              <div>
                <div /> 이름
                <div /> 동네
              </div>
            </div>
            <div>매너온도</div>
          </div>
          <div className="GoodsPgContent">
            <div>
              <select>
              <option>판매중</option>
              <option>예약중</option>
              <option>거래완료</option>
              </select>
            </div>
            {/* 뭘로 받아와야하는거지? */}
            <div><h4>{element.goods_title}</h4></div>
            <div><h4>{element.goods_price}</h4></div>
            <div><h6>카테고리</h6></div>
            <div>{element.goods_description}</div>
            <div className="GoodsPgContentBottom">
              <div>채팅</div>
              <div>관심</div>
              <div>조회</div>
            </div>
          </div>
          <div className="GoodsPgReport">
            이 게시글 신고하기
          </div>
          <div className="GoodsPgUsersGoods">
            <div className="GoodsPgUserGoodsUserid">
              <div>아이디 님의 판매 상품</div>
              <div>더보기</div>
            </div>
            <div>
              <div>사진</div>
              <div>제목</div>
              <div>가격</div>
            </div>
          </div>
          </>
        )}
      </div>
  );
};

export default GoodsPage;