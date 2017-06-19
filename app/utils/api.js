import axios from 'axios';
import { tmdb_key } from '../keys.js';

let baseUrl = 'https://api.themoviedb.org/3/';
let parameters = `/tv?api_key=${tmdb_key}&language=en-US&page=1`;

module.exports = {
  fetchTVShow: (show) => {
    let url = `${baseUrl}search${parameters}&query=${show}`;

    return axios.get(url)
      .then((response) => {
        return response.data.results[0]
      })
  },

  fetchPopularShows: () => {
    let url = `${baseUrl}discover${parameters}&sort_by=popularity.desc`;

    return axios.get(url)
      .then((response) => {
        return response.data.results
      })
  }

}
