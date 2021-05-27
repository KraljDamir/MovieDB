import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: 'Bearer 4f0f5998660e83f5367c029bc3d7a701',
  },
});
