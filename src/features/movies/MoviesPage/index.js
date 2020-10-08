import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavbar from "../../BottomNavbar";
import {
    fetchPopularMovies,
    selectPopularMovies,
    selectLoading,
    selectActivePage,
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
        <>
            {isLoading
                ? "loading"
                : (
                    <div>
                        {popularMovies.map(movie => <p key={movie.id}>{movie.title}</p>)}
                        <BottomNavbar />
                    </div>
                )
            }
        </>
    );
};

export default MoviesPage;