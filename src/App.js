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
} from "./styled";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PersonPage";
import {ReactComponent as TitleLogo} from "./assets/camera-logo.svg";

function App() {
  return (
    <HashRouter>
      <main>
        <Nav>
          <WidthContainer>
            <NavContainer>
              <NavContainerLeft>
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
