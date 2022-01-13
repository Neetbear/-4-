import React from "react";
import { IoIosCamera } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti'

function GoodsImgUpload(props) {
  const handleImgChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file, {autoRevoke: false})
      );

      if (filesArray.length + props.selectedFiles.length <= 10) {
        props.setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
          (file) => URL.revokeObjectURL(file) // avoid memory leak
        );
        console.log(Array.from(e.target.files)[0]);
        props.setDownFiles((prevImages2) => prevImages2.concat(Array.from(e.target.files)));
      } else {
        alert("10개 이하로 올려주세요")
      }
    }
    console.log(props.selectedFiles);
  };

  const removeSelectedImage = (e) => {
    console.log(e.target.id);
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
        <div>
          <TiDelete className="deleteIcons"
            onClick={removeSelectedImage}
            id={source.indexOf(photo)}
          />
          <img src={photo} alt="" key={photo} />
        </div>
      );
    });
  };

  return (
      <div className="GoodsImgUploadBlock">
        <div className="imgSelect">
          <form action="/goodsupload" encType="multipart/form-data" method="post">
            <input
              type="file"
              id="imgFile"
              multiple
              accept="image/*"
              name="goods_img"
              onChange={handleImgChange}
            />
            <label for="imgFile">
              <IoIosCamera />
              <div>{ props.selectedFiles.length } / 10</div>
            </label>
          </form>
        </div>
        <div className="imgResult">
            {renderPhotos(props.selectedFiles)}
        </div>
      </div>
  )
}

export default React.memo(GoodsImgUpload);
