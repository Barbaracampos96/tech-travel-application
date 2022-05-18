import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6281448ced9edf7bd8727c78.mockapi.io/',
});

export default api;
