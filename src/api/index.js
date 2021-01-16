import axios from 'axios';

const BASE_URL = 'http://localhost:8001/app/getCards';

export const fetchPosts = () => axios.get(BASE_URL);
