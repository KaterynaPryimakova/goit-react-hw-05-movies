import axios from 'axios';
// 8c1d02b978dbff183fcda89eac0b3f2e
// https://api.themoviedb.org /3/trending/movie/ {time_window}
// const API_KEY = '8c1d02b978dbff183fcda89eac0b3f2e';
// const BEARER =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFkMDJiOTc4ZGJmZjE4M2ZjZGE4OWVhYzBiM2YyZSIsInN1YiI6IjY1OTg2OTk5ODliNTYxMDA5NDhhZGMzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwhIrlGsVm3C03dU2MtOpUDLJCSTdu_amMw5kHkRjgg';
// const DAY = Date.now();
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.headers = {
//   Authorization: BEARER,
//   Accept: 'aplication/json',
// };

export const getTrending = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=8c1d02b978dbff183fcda89eac0b3f2e'
    );
    return response.data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8c1d02b978dbff183fcda89eac0b3f2e`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getCast = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8c1d02b978dbff183fcda89eac0b3f2e`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error.message);
  }
};

export const getReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8c1d02b978dbff183fcda89eac0b3f2e&language=en-US&page=1`
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
