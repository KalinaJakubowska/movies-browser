import React, { useEffect } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  WidthNavContainer,
  NavContainer,
  NavContainerRight,
  NavContainerLeft,
  List,
  ListItem,
  Nav,
  StyledNavLink,
  Title,
  StyledTitleLogo,
} from "./styled";
import MoviesPage from "./features/movies/MoviesPage";
import MoviePage from "./features/movies/MoviePage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";
import { useDispatch } from "react-redux";
import { fetchCommon } from "./common/commonSlice";
import Search from "./features/Search";
import { setOpen } from "./features/Search/searchSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommon());
  }, [])

  return (
    <HashRouter>
      <main onClick={() => dispatch(setOpen(false))}>
        <Nav>
          <WidthNavContainer>
            <NavContainer>
              <NavContainerLeft>
                <StyledTitleLogo />
                <Title>Movie Browser</Title>
                <List>
                  <ListItem>
                    <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                  </ListItem>
                  <ListItem>
                    <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                  </ListItem>
                </List>
              </NavContainerLeft>
              <NavContainerRight>
                <Search/>
              </NavContainerRight>
            </NavContainer>
          </WidthNavContainer>
        </Nav>
          <Switch>
            <Route path="/movies/movie/:id">
              <MoviePage />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/people/person/:id">
              <PersonPage />
            </Route>
            <Route path="/people">
              <PeoplePage />
            </Route>
            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
      </main>
    </HashRouter>
  );
};

export default App;
