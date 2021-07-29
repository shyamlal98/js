import axios from "axios";
const instance = axios.create({
    baseURL: 'https://tinder-back-ends.herokuapp.com',
    timeout: 3000,
    headers: {'X-Custom-Header': 'Tinder Clone'}
  });
export default instance;
 