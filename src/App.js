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
  Logo,
} from "./styled";
import MoviesPage from "./features/movies/MoviesPage";
import MoviePage from "./features/movies/MoviePage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommon, selectTheme } from "./common/commonSlice";
import Search from "./features/Search";
import { selectOpen, setOpen } from "./features/Search/searchSlice";
import logo from "./assets/logo.svg";
import Footer from "./common/Footer";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const dispatch = useDispatch();
  const isNormalTheme = useSelector(selectTheme);
  const isOpen = useSelector(selectOpen);

  useEffect(() => {
    dispatch(fetchCommon());
  }, [dispatch])

  return (
    <ThemeProvider theme={isNormalTheme ? theme : darkTheme}>
      <GlobalStyle />
      <HashRouter>
        <main onClick={() => isOpen && dispatch(setOpen(false))}>
          <Nav>
            <WidthNavContainer>
              <NavContainer>
                <NavContainerLeft>
                  <Title to="/movies">
                    <Logo src={logo} />
                  </Title>
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
                  <Search />
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
          <Footer />
        </main>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
