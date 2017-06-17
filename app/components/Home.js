import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1>Get info about your favorite TV shows.</h1>
      <h3>Get a list of popular shows, or search for new ones.</h3>
      <div className='buttons'>
        <Link to='/popular'><button>Popular</button></Link>
        <Link to='/search'><button>Search</button></Link>
      </div>
    </div>
  )
}

module.exports = Home;
