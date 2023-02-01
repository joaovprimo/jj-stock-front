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

async function getProvider (storesId){
    console.log(storesId);
    const config = createHearders();
    const promise = await axios.get(`${base_Url}/providers/${storesId}`,config);
    return promise;
}

async function getProviderBy(data){
    const config = createHearders();
    const promise = await axios.get(`${base_Url}/providers/findone?cnpj=${data}`,config);
    return promise;
}

async function createProvider(data){
    const config = createHearders();
    const promise = await axios.post(`${base_Url}/providers/`, data ,config);
    return promise;
}

async function deleteProvider(id){
    const config = createHearders();
    const promise = await axios.delete(`${base_Url}/providers/${id}`,config);
    return promise;
}

async function getProducts(stock){
    console.log(stock)
    const config = createHearders();
    const promise = await axios.get(`${base_Url}/products/${stock}`, config);
    return promise;
}

async function deleteProduct(id){
    const config = createHearders();
    const promise = await axios.delete(`${base_Url}/products/${id}`,config);
    return promise;
}

async function createEntry(stock, data){
    console.log(stock)
    const config = createHearders();
    const promise = await axios.post(`${base_Url}/entry/${stock}`, data, config);
    return promise;
}


export { postLogin, getProvider, getProviderBy, createProvider, deleteProvider, getProducts, deleteProduct, createEntry }