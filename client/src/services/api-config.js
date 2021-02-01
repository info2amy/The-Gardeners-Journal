import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://gardeners-api.herokuapp.com' : 'https://localhost:3000'
  

const api = axios.create ({
  baseURL: baseUrl
})

export default api;