import axios from 'axios';
const resign =  "http://localhost:3000/api/resign";
//server
//const resign =  "https://order-demo-nextjs.herokuapp.com/api/resign";

import {RESIGN} from '../constant.config.api/config/config'
async function getAllUser() {
    let data;
    await axios.get(
        RESIGN,
        
    )
        .then(function (response) {
            data = response;
        })
        .catch(function (err) {
            data = err.response;
        });

    return data;
}

export default getAllUser;