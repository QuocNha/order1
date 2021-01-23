import axios from 'axios';
import mongoose from 'mongoose';
const resign =  "http://localhost:3000/api/resign";
//server
//const resign =  "https://order-demo-nextjs.herokuapp.com/api/resign";

import {RESIGN} from '../constant.config.api/config/config'
async function resignUser(user:any) {
    console.log("user11111",user)
    let data;
    let param={
        _id:mongoose.Schema.Types.ObjectId,
        address1:user.address1, 
        address2: user.address2,
        country: user.country,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        phone: user.phone,
        userRole: user.userRole,
        userType: user.userType,
    };
    
    console.log("param",param)
    await axios.post(
        RESIGN,param
        
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

export default resignUser;