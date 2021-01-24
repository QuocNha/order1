import axios from 'axios';


import {LOGINUSER} from '../constant.config.api/config/config'
async function resignUser(user:any) {
    console.log("user11111",user)
    let data;
    await axios.put(
        LOGINUSER,user
        
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