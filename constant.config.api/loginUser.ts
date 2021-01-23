import axios from 'axios';
import mongoose from 'mongoose';
// const resign =  "http://localhost:3000/api/login";
//server
//const resign =  "https://order-demo-nextjs.herokuapp.com/api/resign";

import {LOGINUSER} from '../constant.config.api/config/config'
async function loginUser(user:any) {
    console.log("loginUser",user)
    let data;
    let param={
        email: user.email,
        password: user.password,
    };
    
    console.log("param",param)
    await axios.post(
        LOGINUSER,param
        
    )
        .then(function (response) {
            data = response;
        })
        .catch(function (err) {
            data = err.response;
            console.log("Data",data)
        });

    return data;
}

export default loginUser;