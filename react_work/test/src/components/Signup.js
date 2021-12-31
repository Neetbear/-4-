import React, { useState }  from "react";
import { useDispatch } from 'react-redux'
import DaumPostCode from 'react-daum-postcode';

function Signup() {
    const [userid, setUserid] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [checkpassword, setUsercheckpassword] = useState('');
    const [usernickname, setUsernickname] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userphonenumber, setUserphonenumber] = useState('');
    const [useraddress, setUseraddress] = useState('');
    const [useraddressdetail, setUseraddressdetail] = useState('');
    // const [usercategory, setUsercategory] = useState('');

    const onUseridHandler = (event) => {
        setUserid(event.currentTarget.value)
    }
    const onUserpasswordHandler = (event) => {
        setUserpassword(event.currentTarget.value)
    }
    const onCheckpasswordHandler = (event) => {
        setUsercheckpassword(event.currentTarget.value)
    }
    const onUsernicknameHandler = (event) => {
        setUsernickname(event.currentTarget.value)
    }
    const onUseremailHandler = (event) => {
        setUseremail(event.currentTarget.value)
    }
    const onUserphonenumberHandler = (event) => {
        setUserphonenumber(event.currentTarget.value)
    }
    const onUseraddressHandler = (event) => {
        setUseraddress(event.currentTarget.value)
    }
    const onUseraddressdetailHandler = (event) => {
        setUseraddressdetail(event.currentTarget.value)
    }
    // const onUsercategoryHandler = (event) => {
    //     setUsercategory(event.currentTarget.value)
    // }

    const onSignupSubmitHandler = (event) => {}
    return(
        <>
            <h2>회원가입</h2>
            <form action='signin' onSubmit={onSignupSubmitHandler}>
                <label>아이디 : </label>
                <input type="text" value={userid || ''} onChange={onUseridHandler} placeholder="아이디를 입력하세요" />
                <br />
                <label>비밀번호 : </label>
                <input type="password" value={userpassword || ''} onChange={onUserpasswordHandler} placeholder="비밀번호를 입력하세요" />
                <br />
                <label>비밀번호 확인 : </label>
                <input type="password" value={checkpassword || ''} onChange={onCheckpasswordHandler} placeholder="비밀번호를 다시 입력해주세요" />
                <br />
                <label>닉네임 : </label>
                <input type="text" value={usernickname || ''} onChange={onUsernicknameHandler} placeholder="닉네임을 입력하세요" />
                <br />
                <label>이메일 : </label>
                <input type="text" value={useremail || ''} onChange={onUseremailHandler} placeholder="이메일 입력하세요" />
                <br />
                <label>전화번호 : </label>
                <input type="text" value={userphonenumber || ''} onChange={onUserphonenumberHandler} placeholder="전화번호를 입력하세요" />
                <br />
                <label>주소 : </label>
                <input type="text" value={useraddress || ''} onChange={onUseraddressHandler} placeholder="주소를 입력하세요" />
                <br />
                <label>상세주소 : </label>
                <input type="text" value={useraddressdetail || ''} onChange={onUseraddressdetailHandler} placeholder="상세 주소를 입력하세요" />
                <br />
                <label>
                    가구/인테리어
                    <input type="checkbox" name="checkbox1" value="가구/인테리어" />
                </label>
                <br />
                <label>
                    전자기기
                    <input type="checkbox" name="checkbox2" value="전자기기" />
                </label>
                <br />
                <label>
                    뷰티/미용
                    <input type="checkbox" name="checkbox3" value="뷰티/미용" />
                </label>
                <br />
                <label>
                    남성패션
                    <input type="checkbox" name="checkbox4" value="남성패션" />
                </label>
                <br />
                <label>
                    여성패션
                    <input type="checkbox" name="checkbox5" value="여성패션" />
                </label>
                <br />
                <label>
                    도서/티켓/음반
                    <input type="checkbox" name="checkbox6" value="도서/티켓/음반" />
                </label>
                <br />
                <label>
                    가전제품
                    <input type="checkbox" name="checkbox7" value="가전제품" />
                </label>
                <br />
                <label>
                    스포츠/레터
                    <input type="checkbox" name="checkbox8" value="스포츠/레저" />
                </label>
                <br />
                <label>
                    게임/취미
                    <input type="checkbox" name="checkbox9" value="게임/취미" />
                </label>
                <br />
                <label>
                    반려동물용품
                    <input type="checkbox" name="checkbox10" value="반려동물용품" />
                </label>
                <br />
                <label>
                    기타중고물품
                    <input type="checkbox" name="checkbox11" value="기타중고물품" />
                </label>
                <br />
                <button type="submit">회원가입</button>
            </form>
        </>
    );
};

export default Signup;