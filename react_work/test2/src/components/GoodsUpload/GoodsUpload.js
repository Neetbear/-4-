import React, { useState } from "react";
import './GoodsUpload.css'
import { CgClose } from 'react-icons/cg';
import GoodsImgUpload from "./GoodsImgUpload";
import { GrFormNext } from 'react-icons/gr';
import { MdPostAdd } from 'react-icons/md';
import { BsSliders } from 'react-icons/bs';
import axios from "axios";

function GoodsUpload() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [downFiles, setDownFiles] = useState([]);

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value)
  }
  const onPriceHandler = (event) => {
    setPrice(event.currentTarget.value)
  }
  const onDescriptionHandler = (event) => {
    setDescription(event.currentTarget.value)
  }

  let formData = new FormData();
  const config = {
    header: {'content-type': 'multipart/form-data'}
  };
  formData.append("file", downFiles);
  const submitGoods = async() => {
    axios.post('http://localhost:5001/api/goodsupload', {
      title: title,
      price: price,
      description: description,
      img: downFiles
    }).then(()=> {
      console.log(selectedFiles[0]);
      console.log(selectedFiles[1]);
      alert('등록 완료!');
    })
  }
  
  return (
    <div className="GoodsUploadTemplate">
        <div className="GoodsUploadHead">
          <div><CgClose /></div>
          <div>중고거래 글쓰기</div>
          <div>
            <button className="submit-button" onClick={submitGoods}>입력</button>
          </div>
        </div>
        <GoodsImgUpload selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} downFiles={downFiles} setDownFiles={setDownFiles}/>
        <div className="GoodsUploadTitle">
          <input type="text" placeholder="글 제목" className="GoodsUploadTitleBox" value={title || ''} onChange={onTitleHandler} />
        </div>
        <div className="GoodsUploadCategory">
          <div>카테고리 선택</div>
          <GrFormNext />
        </div>
        <div className="GoodsUploadPrice">
          <input type="text" placeholder="₩ 가격 (선택사항)" className="GoodsUploadPriceBox" value={price || ''} onChange={onPriceHandler} />
          <div>
            <input type="checkbox" id="goodsPrice" />
            <label >가격 제안받기</label>
          </div>
        </div>
        <div className="GoodsUploadContents">
          <input type="textarea" id="goodsContents" placeholder="000동에 올릴 게시글 내용을 작성해주세요.(가품 및 판매 금지품목은 게시가 제한될 수 있어요.)" value={description || ''} onChange={onDescriptionHandler} />
        </div>
        <div className="GoodsUploadFooter">
          <div><MdPostAdd />자주 쓰는 문구 </div>
          <div><BsSliders /> 보여줄 동네 설정</div>
        </div>
    </div>
  )
}

export default GoodsUpload;