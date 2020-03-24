import axios from 'axios';

const apiPeople = axios.create({
    baseURL: 'http://gerenciadorfccontfyapi.azurewebsites.net/api/Pessoa'
});

export default apiPeople;