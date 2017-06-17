import React from 'react';

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

module.exports = Show;
