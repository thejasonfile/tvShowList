import axios from 'axios';
import { tmdb_key } from '../keys.js';

module.exports = {
  fetchTVShow: (show) => {
    let url = `https://api.themoviedb.org/3/search/tv?api_key=${tmdb_key}&language=en-US&query=${show}&page=1`;
    let encodedUri = window.encodeURI(url)

    return axios.get(encodedUri)
      .then((response) => {
        return response.data.results[0]
      })
  }
}
