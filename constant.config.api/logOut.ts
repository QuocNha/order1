import axios from 'axios';

import {LOGOUT} from '../constant.config.api/config/config'
async function loginUser() {
    console.log("logOut","logOut")
    let data;
    
    
    
    await axios.post(
        LOGOUT
        
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