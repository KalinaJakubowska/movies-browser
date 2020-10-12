import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  WidthContainer,
  NavContainer,
  NavContainerRight,
  List,
  ListItem,
  Nav,
  StyledNavLink,
  Title,
  Input,
  InputBox,
  StyledInputIcon,
} from "./styled";
import MoviesPage from "./features/movies/MoviesPage";
import MoviePage from "./features/movies/MoviePage";
import PeoplePage from "./features/people/PersonPage";
import { ReactComponent as TitleLogo } from "./assets/camera-logo.svg";

function App() {

  return (
    <HashRouter>
      <main>
        <Nav>
          <WidthContainer>
            <NavContainer>
              <NavContainer>
                <TitleLogo />
                <Title>Movie Browser</Title>
                <List>
                  <ListItem>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                  </ListItem>
                  <ListItem>
                    <StyledNavLink to="/people">People</StyledNavLink>
                  </ListItem>
                </List>
              </NavContainer>
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
