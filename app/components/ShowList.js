import React from 'react';
import Show from './Show';

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

module.exports = ShowList;
