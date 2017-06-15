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
    this.removeShow = this.removeShow.bind(this);
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
          if(fetchedShow) {
            var tvShows = this.state.tvShows
            tvShows.unshift(fetchedShow);
            this.setState({tvShows})
          } else {
            this.apiError()
          }
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

  removeShow(id) {
    var filteredShows = this.state.tvShows.filter((show) => {
      return show.id !== id
    })
    this.setState({tvShows: filteredShows})
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
          <ShowList shows={this.state.tvShows} removeShow={this.removeShow}/>
        </div>
        <div className='footer'></div>
      </div>
    )
  }
}

const ShowList = (props) => {
  return (
    <ul className='showList'>
      {props.shows.map((show) => {
        return (
          <Show key={show.id} show={show} removeShow={props.removeShow}/>
        )
      })}
    </ul>
  )
}

const Show = (props) => {
  let baseUrl = 'https://image.tmdb.org/t/p/w640';
  return (
    <li key={props.show.id}>
      <div className='showInfo'>
        <a href={`https://www.themoviedb.org/tv/${props.show.id}`}>
          <img
            className='showPoster'
            src={`${baseUrl}${props.show.poster_path}`}
            alt={`Poster for ${props.show.name}`}
          />
        </a>
      <span className='showOverview'>{props.show.overview}</span>
        <div className='voteInfo'>
          <div className='voteItem'>
            <p>Vote average</p>
            <p>{props.show.vote_average}</p>
          </div>
          <div className='voteItem'>
            <p>Vote count</p>
            <p>{props.show.vote_count}</p>
          </div>
        </div>
        <button className='removeButton' onClick={() => props.removeShow(props.show.id)}>X</button>
      </div>
    </li>
  )
}

export default App;
