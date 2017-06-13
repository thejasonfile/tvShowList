import React, { Component } from 'react';
import api from '../utils/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newShow: '',
      tvShows : [],
    };
    // this = 'App' component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // this without being bound to 'App' = undefined
    // you will see a "Cannot read property 'setState' of null" error in the console if you don't bind
    this.setState({newShow: e.target.value});
  }

  getShowData(show) {
    if(show){
      api.fetchTVShow(show)
        .then((fetchedShow) => {
          fetchedShow
            ? this.setState({tvShows: [...this.state.tvShows, fetchedShow]})
            : this.apiError()
        })
    } else {
      this.apiError();
    }

  }

  apiError() {
    alert('Problem with search, please try again.')
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getShowData(this.state.newShow)
    this.setState({newShow: ''});
    this.newShowInput.focus();
  }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='newShow'>Get info for a TV Show</label>
            <input
              ref={(input) => {this.newShowInput = input;}}
              type='text'
              id='newShow'
              value={this.state.newShow}
              onChange={this.handleChange}
              placeholder='Search by TV Show Title'
            />
          <button type='submit'>Search</button>
          <div className='small'>Data provided by <a href="https://www.themoviedb.org">The Movie DB</a></div>
          </form>
        </div>
        <div className='content'>
          <ShowList shows={this.state.tvShows}/>
        </div>
        <div className='footer'></div>
      </div>
    )
  }
}

const ShowList = (props) => {
  let baseUrl = 'https://image.tmdb.org/t/p/w640';
  return (
    <ul className='showList'>
      {props.shows.map((show) => {
        return (
          <li key={show.id}>
            <div className='showInfo'>
              <a href={`https://www.themoviedb.org/tv/${show.id}`}>
                <img
                  className='showPoster'
                  src={`${baseUrl}${show.poster_path}`}
                  alt={`Poster for ${show.name}`}
                />
              </a>
            <span className='showOverview'>{show.overview}</span>
              <div className='voteInfo'>
                <div className='voteItem'>
                  <p>Vote average</p>
                  <p>{show.vote_average}</p>
                </div>
                <div className='voteItem'>
                  <p>Vote count</p>
                  <p>{show.vote_count}</p>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default App;
