import axios from "axios"

const API_KEY = "5fb5e73b59c15c617abb89f3dcafe4a7"
const baseURL = "https://api.themoviedb.org/3/"

axios.defaults.baseURL = baseURL;

export const getTrendingTodayAPI = () => {
  axios.defaults.params = {
    api_key: API_KEY,
  }
  return axios
    .get("trending/movie/day")
    .then((res) => res.data.results)
    .catch((err) => {
      throw err
    })
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getOneMovieByIdAPI = (id) => {
  axios.defaults.params = {
    api_key: API_KEY,
    language: "en-US",
  }

  return axios.get("movie/" + id).then(res => res.data)
}

//
//https:api.themoviedb.org/3/search/movie?
//api_key =<< api_key >>& language=en - US & page=1 & include_adult=false
 export const getMoviesListBySearchAPI = (query) => {
  axios.defaults.params = {
    api_key: API_KEY,
    query,
    language: "en-US",
    page: 1,
    include_adult: false,
  }
   return axios.get("search/movie").then(res => {
     console.log(res.data.results)
     return res.data.results
  })
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export const getReviewsByIdAPI = (id) => {
  axios.defaults.params = {
    api_key: API_KEY,
    language: "en-US",
    page: 1,
  }
  return axios.get("movie/" + id + "/reviews").then((res) => res.data.results)
} 

export const getCastsByIdAPI = (id) => {
  axios.defaults.params = {
    api_key: API_KEY,
    language: "en-US",
  }
  return axios
    .get("movie/" + id + "/credits")
    .then((res) => res.data.cast)
} 
// getCastsByIdAPI('646385').then(console.log)