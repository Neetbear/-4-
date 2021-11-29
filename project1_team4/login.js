const checkId = document.querySelector("#checkIdDiv");
const checkIdValue = checkId.querySelector("input");
const checkPw = document.querySelector("#checkPwDiv");
const checkPwValue = checkPw.querySelector("input");

function loginFunc() {
    const Id = checkIdValue.value;
    const Pw = checkPwValue.value;
    if(localStorage.getItem(Id) == Pw) {
        localStorage.setItem("loginstate", "okay");
        window.location.href = "./project.html";
    }
    else {        
        swal("error", "로그인 실패");        
    }
}

function joinFunc() {
    window.location.href = "./join.html"
}