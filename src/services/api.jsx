import axios from 'axios';


const api = axios.create({baseURL: ' https://api.github.com/orgs/reactjs/repos'});

export default api;