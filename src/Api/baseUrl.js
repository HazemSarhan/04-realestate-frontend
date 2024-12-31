import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://zero4-realestate-backend.onrender.com/api/v1/',
  withCredentials: true,
});

export default baseUrl;
