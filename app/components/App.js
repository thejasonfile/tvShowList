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
    api.fetchTVShow(show)
      .then((fetchedShow) => {
        this.setState({ fetchedShow })
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getShowData(this.state.newShow)
    this.setState({tvShows: [...this.state.tvShows, this.state.newShow], newShow: ''});
    this.newShowInput.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='newShow'>Add a New Show</label>
          <input
            ref={(input) => {this.newShowInput = input;}}
            type='text'
            id="newShow"
            value={this.state.newShow}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <h2>Shows I watch</h2>
        <div>
          <ul>
            {this.state.tvShows.map((show, i) => {
              return(
                <li key={i}>{show}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const ShowList = (props) => {
  let baseUrl = 'https://image.tmdb.org/t/p/w640';
  return (
    <div>ShowList</div>
  )
}

export default App;
