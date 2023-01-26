import axios from 'axios';

const base_Url = "http://localhost:5000";

function createHearders(){
    const auth = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    }
    return config;
}

async function postLogin (form){
    const promise = await axios.post(`${base_Url}/store/login`, form);
    return promise;
}

export { postLogin }