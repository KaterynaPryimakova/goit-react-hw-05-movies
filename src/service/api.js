import axios from 'axios';
const API_KEY = '8c1d02b978dbff183fcda89eac0b3f2e';

export const getTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getCast = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error.message);
  }
};

export const getReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export const getMovie = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8c1d02b978dbff183fcda89eac0b3f2e`
    );
    return response.data.results;
  } catch (error) {
    console.error(error.message);
  }
};
