import axios from 'axios';
import { API_KEY } from '../config/const';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
