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
  let baseUrl = 'https://image.tmdb.org/t/p/w640';
  return (
    <ul className='popular-list'>
      {props.shows.map((show) => {
         return (
           <li key={show.id} className='popular-item'>
               <ul className='popular-item-content'>
                 <li>
                   <a href={`https://www.themoviedb.org/tv/${show.id}`}>
                     <img src={`${baseUrl}${show.poster_path}`}></img>
                   </a>
                </li>
                 <li className='showName'>{show.name}</li>
                 <li className='showPopularity'>{show.popularity}</li>
               </ul>
           </li>
         )
      })}
    </ul>
  )
}

module.exports = Popular;
