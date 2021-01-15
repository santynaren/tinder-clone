import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://tinder-nasa-be.herokuapp.com/',
});

export default instance;
