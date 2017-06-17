import React, {Component} from 'react';
import api from '../utils/api';
import ShowList from './ShowList';
import Nav from './Nav';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newShow: '',
      tvShows : [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeShow = this.removeShow.bind(this);
  }

  handleChange(e) {
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
          <Nav />
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

module.exports = SearchForm;
