import axios from 'axios';
const resign =  "http://localhost:3000/api/resign";
//server
//const resign =  "https://order-demo-nextjs.herokuapp.com/api/resign";

import {GETALLPRODUCT} from '../constant.config.api/config/config'
async function getAllProduct(page,limit) {
    let data;
    let param = {
        page:page,
        limit:limit
    }
    let url=GETALLPRODUCT
    await axios.get(
        url
    )
        .then(function (response) {
            data = response;
        })
        .catch(function (err) {
            data = err.response;
        });

    return data;
}

export default getAllProduct;