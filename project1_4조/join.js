const inputId = document.querySelector("#idDiv");
const inputIdValue = inputId.querySelector("input");
const inputPassword = document.querySelector("#pwDiv");
const inputPasswordValue = inputPassword.querySelector("input");
const inputCheckPassword = document.querySelector("#checkPw");
const inputCheckPasswordValue = inputCheckPassword.querySelector("input");
const inputName = document.querySelector("#nameDiv");
const inputNameValue = inputName.querySelector("input");
const inputEmail = document.querySelector("#emailDiv");
const inputEmailValue = inputEmail.querySelector("input");
const inputIdenti = document.querySelector("#identiDiv");
const inputIdentiFValue = inputIdenti.querySelector(".identi1");
const inputIdentiSValue = inputIdenti.querySelector(".identi2");

//아이디 판별용 정규표현식 
const idRegExp = /^[a-zA-z0-9]{4,12}$/;
//비밀번호 판별용 정규표현식
const password1RegExp = /^[a-zA-z0-9]{4,12}$/;
//이메일 판별용 정규표현식
const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{2,3}$/;
//주민등록번호 판별용 정규표현식
const identi1RegExp = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/;
const identi2RegExp = /^[1-4][0-9]{6}$/;

function joinFunc() {
    if(inputIdValue.value == '' || !idRegExp.test(inputIdValue.value)) {
        swal("error", "아이디는 영문 대소문자와 숫자 4~12자리로 입력해주세요");
    }
    else if(inputPasswordValue.value == '' || !password1RegExp.test(inputPasswordValue.value)){
       
        swal("error", "비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해주세요");
    }
    else if(inputCheckPasswordValue.value != inputPasswordValue.value) {
       
        swal("error", "비밀번호와 비밀번호 확인이 다릅니다.");
    }
    else if(inputNameValue.value == '') {
       
        swal("error", "이름을 입력해주세요.");
    }
    else if(inputEmailValue.value == '' || !emailRegExp.test(inputEmailValue.value)) {
       
        swal("error", "이메일을 정확히 입력해주세요.");
    }
    else if(inputIdentiFValue.value == '' || !identi1RegExp.test(inputIdentiFValue.value)) {
       
        swal("error", "주민등록번호 앞자리를 정확히 입력해주세요.");
    }
    else if(inputIdentiSValue.value == '' || !identi2RegExp.test(inputIdentiSValue.value)) {
        
        swal("error", "주민등록번호 뒷자리를 정확히 입력해주세요.");
    }
    else {
        let currentId = inputIdValue.value;
        let currentPassword = inputPasswordValue.value; 
        localStorage.setItem(currentId, currentPassword);
        localStorage.setItem("loginstate", "");
        window.location.href = "./login.html";
    }    
}



