import axios from 'axios';
import {ADDPRODUCT} from '../constant.config.api/config/config'
async function addProduct(param) {
    let data;
    console.log("param",param)
    let url=ADDPRODUCT
    await axios.post(
        url,param
    )
        .then(function (response) {
            data = response;
        })
        .catch(function (err) {
            data = err.response;
        });

    return data;
}

export default addProduct;