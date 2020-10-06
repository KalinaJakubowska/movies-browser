import React from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import MoviesPage from './features/movies/MoviesPage';
import PeoplePage from './features/people/PersonPage';

function App() {

  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/movies">
              Movies
              </NavLink>
          </li>
          <li>
            <NavLink to="/people">
              People
              </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/movies">
            <MoviesPage/>
          </Route>
          <Route path="/people">
            <PeoplePage/>
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  )
}

export default App;
