import axios from 'axios';

async function getAllUser() {
    let data;
    await axios.get(
        "http://localhost:3000/api/resign",
        
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