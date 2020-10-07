import React from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import MoviesPage from './features/movies/MoviesPage';
import PeoplePage from './features/people/PersonPage';

function People () {
    return (
       
            <Theme>
            <Containter>
                <Title>
                    Imię i nazwisko
                </Title>
                <DateBirth>
                    Data urodzenia
                </DateBirth>
                <Depiction>
                    Opis aktora
                </Depiction>
                <MoviePage>
                    W jakich filmach grała
                </MoviePage>
            </Containter>
        </Theme>
        
    )
}
