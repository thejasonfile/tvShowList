import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <ul className='nav'>
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
    )
  }
}

module.exports = Nav;
