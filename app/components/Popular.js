import React, {Component} from 'react';
import api from '../utils/api';

import Nav from './Nav';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: null
    };
  }

  componentDidMount() {
    api.fetchPopularShows()
      .then((shows) => {
        this.setState({shows})
      })
  }

  render() {
    return (
      <div>
        <Nav />
        {!this.state.shows
          ? <div>Loading</div>
          : <ShowGrid shows={this.state.shows} />
        }
      </div>
    )
  }
}

const ShowGrid = (props) => {
  return (
    <ul>
      {props.shows.map((show, index) => {
         return <li>{show.name}</li>
      })}
    </ul>
  )
}

module.exports = Popular;
