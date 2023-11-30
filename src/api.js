import axios from 'axios';

const keyMovie = '7fef7aef972e83dc66426cc863bb7bbf';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${keyMovie}`);
  return response.data;
};

export const fetchSerchMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${keyMovie}`
  );
  return response.data;
};

export const fetchGetMovieDetailsById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${keyMovie}`);
  return response.data;
};

export const fetchGetMovieCreditsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${keyMovie}`
  );
  return response.data;
};

export const fetchGetMovieReviewsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${keyMovie}`
  );
  return response.data;
};
