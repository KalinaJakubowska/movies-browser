import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import MovieTile from "../../MovieTile";
import {
    fetchPopularMovies,
    selectPopularMovies,
    selectLoading,
    selectActivePage,
} from "./moviesSlice";
import { MoviesContainer } from "./styled";

const MoviesPage = () => {
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectLoading);
    const activePage = useSelector(selectActivePage);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [activePage])

    return (
        <>
            {isLoading
                ? <Loading/>
                : (
                    <>
                        <MoviesContainer>
                            {popularMovies.map(movie =>
                                <MovieTile key={movie.id} movieInfo={movie}></MovieTile>
                            )}
                        </MoviesContainer>
                        <BottomNavbar />
                    </>
                )
            }
        </>
    );
};

export default MoviesPage;