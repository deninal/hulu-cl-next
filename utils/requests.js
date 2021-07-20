/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/week?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/week?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Crime",
    url: `/discover/week?api_key=${API_KEY}&with_genres=80`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/week?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/week?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/week?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movies",
    url: `/discover/week?api_key=${API_KEY}&with_genres=10770`,
  },
};
