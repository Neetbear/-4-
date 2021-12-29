// 모듈 생성 하기 
const SUBMIT = "counter/SUBMIT";
export const submit = () => ({ type: SUBMIT });
//initialize state
const initialize = {
    userid, 
    userpassword, 
    usernickname, 
    useremail, 
    userphonenumber, 
    useraddress, 
    useraddressdetail, 
    usercategory
};

// define reducer : export default
export default function counter(state=initialize, action) {
    switch(action.type)
    {
        case SUBMIT:
            return {
                ...state,
                userid: action.userid, 
                userpassword: action.userpassword, 
                usernickname: action.usernickname, 
                useremail: action.useremail, 
                userphonenumber: action.userphonenumber, 
                useraddress: action.useraddress, 
                useraddressdetail: action.useraddressdetail, 
                usercategory: action.usercategory
            };
        default:
            return state;
    }
};
