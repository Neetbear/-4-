import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Signup from "../components/Signup";
import { signup } from "../modules/signup";

function SigninContainer () {
    const { number, diff } = useSelector((state) => ({
   
    }));

    const dispatch = useDispatch();

    return(
        <Signup 
           
        />
    );
};

export default SigninContainer;