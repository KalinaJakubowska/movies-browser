import React from 'react';
import App from './App.css';
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import MoviesPage from './features/movies/MoviesPage';
import PeoplePage from './features/people/PersonPage';

function Movies () {
    return (
        <Theme>
            <Containter>
                
                <Tile>
                    <Title>
                        Tytuł filmu
                    </Title>
                    <Image>
                    Obrazek
                    </Image>
                    <Year>
                    Data produkcji
                    </Year> 
                    <Genre>
                        <Tag>
                        Rodzaj: Action itd
                        </Tag>
                    </Genre>  
                </Tile>
                
                <Production>
                    Kraje które go wyprodukowały
                </Production>
                <Release>
                    Data wydania w danym kraju, wyświetlania
                </Release>
                
                <Ratings>
                    Ocena
                </Ratings>
                <Depiction>
                    Opis filmu: Przykładowy opis
                </Depiction>
                <Cast>
                    W jakich filmach grała
                </Cast>
            </Containter>
        </Theme>
    )
}

export default Movies;