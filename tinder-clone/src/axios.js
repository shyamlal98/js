import axios from "axios";
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8001',
    timeout: 1000,
    headers: {'X-Custom-Header': 'Tinder Clone'}
  });
export default instance;
 