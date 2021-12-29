import React from "react";
import DaumPostCode from 'react-daum-postcode';

function Signup() {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
    }
    return(
        <>
            <h2>회원가입</h2>
            <form action='signin'>
                <input type="text" name="userid" placeholder="ID를 입력하세요" />
                <br />
                <input type="password" name="userpassword" placeholder="비밀번호를 입력하세요" />
                <br />
                <input type="password" name="checkpassword" placeholder="비밀번호를 입력하세요" />
                <br />
                <input type="text" name="userid" placeholder="닉네임을 입력하세요" />
                <br />
                <input type="text" name="userid" placeholder="이메일을 입력하세요" />
                <br />
                <input type="text" name="userid" placeholder="핸드폰 번호를 입력하세요" />
                <br />
                <input type="text" name="userid" placeholder="주소를 입력하세요" onClick={handleComplete} readOnly/>
                <br />
                <input type="text" name="userid" placeholder="세부 주소를 입력하세요" />
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