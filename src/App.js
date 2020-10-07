import React from "react";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {
  WidthContainer,
  NavContainer,
  List,
  ListItem,
  Nav,
  StyledNavLink,
  Title,
} from "./styled";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PersonPage";
import {ReactComponent as TitleLogo} from "./assets/camera-logo.svg";

function App() {
  return (
    <HashRouter>
      <nav>
        <Nav>
          <WidthContainer>
            <NavContainer>
              <Title>
                <TitleLogo /> Movie Browser
              </Title>
              <List>
                <ListItem>
                  <StyledNavLink to="/movies">Movies</StyledNavLink>
                </ListItem>
                <ListItem>
                  <StyledNavLink to="/people">People</StyledNavLink>
                </ListItem>
              </List>
            </NavContainer>
          </WidthContainer>
        </Nav>
        <WidthContainer>
          <Switch>
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
      </nav>
    </HashRouter>
  );
}

export default App;
