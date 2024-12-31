import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://zero4-realestate-api.onrender.com',
});

export default baseUrl;
