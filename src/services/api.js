import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '69f2fedec75952586c4375268db8626a';

export async function getTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieCredits(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
}

export async function getMovieByQuery(query) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response.data;
}
