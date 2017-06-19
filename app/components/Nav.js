import React  from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <ul className='nav-list'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/popular'>
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/search'>
            Search
          </NavLink>
        </li>
      </ul>
      <div className='small'>Data provided by <a href="https://www.themoviedb.org">The Movie DB</a></div>
    </div>
  )
}

module.exports = Nav;
