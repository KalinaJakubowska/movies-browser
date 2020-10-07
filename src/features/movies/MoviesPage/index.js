import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPopularMovies,
    selectPopularMovies,
    selectLoading,
    selectActivePage,
    setActivePage
} from "./moviesSlice";

const MoviesPage = () => {
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectLoading);
    const activePage = useSelector(selectActivePage);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [activePage])

    return (
        <div>
            {isLoading
                ? "loading"
                : popularMovies.map(movie => <p key={movie.id}>{movie.title}</p>)
            }

            <button onClick={() => dispatch(setActivePage(activePage + 1))} />
        </div>
    );
};

export default MoviesPage;