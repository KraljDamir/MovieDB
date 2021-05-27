import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';

export default () => {
  const API_KEY = '?api_key=4f0f5998660e83f5367c029bc3d7a701';

  const [popularMovies, setPopularMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchPopularMovies = async () => {
    try {
      const response = await tmdb.get('/movie/popular' + API_KEY + '&page=1');
      setPopularMovies(response.data.results);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  const fetchMoreMovies = async () => {
    try {
      const response = await tmdb.get('/movie/popular' + API_KEY + '&page=2');
      console.log(response.data);
      setPopularMovies((popularMovies) => [...popularMovies, response.data]);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  return [popularMovies, fetchPopularMovies, fetchMoreMovies, errorMessage];
};
