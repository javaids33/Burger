import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerproject-5411f.firebaseio.com/'
});

export default instance;