import React, { Component } from 'react';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom'

import SearchForm from './SearchForm';
import Popular from './Popular';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/popular' component={Popular}></Route>
        <Route exact path='/search' component={SearchForm}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
