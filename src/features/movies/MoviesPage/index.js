import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPopularMovies,
    selectPopularMovies,
    selectLoading
} from "./moviesSlice";

const MoviesPage = () => {
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [])

    return (
        <div>{isLoading
            ? "loading"
            : popularMovies.map(movie => <p key={movie.id}>{movie.title}</p>)
        }</div>
    );
};

export default MoviesPage;