import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response) => response.data;

const request ={
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url,body).then(responseBody),
    put: (url, body) => axios.put(url,body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody)
}

const Investments = {
    list: () => request.get('/investments'),
    details: (id) => request.get(`/investments/${id}`),
    create: (investment) => request.post('/investment/', investment),
    update: (investment) => request.put(`/investment/${investment.id}`, investment),
    details: (id) => request.del(`/investments/${id}`),
}

export default {
    Investments
}