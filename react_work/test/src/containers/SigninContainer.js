import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { signin } from "../modules/signin";

function SigninContainer () {
    const { number, diff } = useSelector((state) => ({
   
    }));

    const dispatch = useDispatch();

    return(
        <Signin 
           
        />
    );
};

export default SigninContainer;