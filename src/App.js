import React from "react";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {
  WidthContainer,
  NavContainer,
  NavContainerRight,
  NavContainerLeft,
  List,
  ListItem,
  Nav,
  StyledNavLink,
  Title,
  Input,
  InputBox,
  StyledInputIcon,
  StyledTitleLogo,
} from "./styled";
import MoviesPage from "./features/movies/MoviesPage";
import MoviePage from "./features/movies/MoviePage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";

function App() {
  return (
    <HashRouter>
      <main>
        <Nav>
          <WidthContainer>
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
                <InputBox>
                  <Input placeholder="Search for movies..." />
                  <StyledInputIcon />
                </InputBox>
              </NavContainerRight>
            </NavContainer>
          </WidthContainer>
        </Nav>
        <WidthContainer>
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
        </WidthContainer>
      </main>
    </HashRouter>
  );
}

export default App;
