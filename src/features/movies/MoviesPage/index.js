import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import MovieTile from "../../../common/tiles/MovieTile";
import {
    selectList,
    selectLoading,
    setActivePage,
    setActivePath,
    resetState,
} from "../../listSlice";
import { MovieContainer } from "./../../../common/tiles/TileContainer";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const popularMovies = useSelector(selectList);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(setActivePath(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`));

        return () => {
            dispatch(resetState());
        };
    }, []);

    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [urlPageNumber, urlQuery]);

    return (
        <>
            <Header>Popular movies</Header>

            {isLoading
                ? <Loading />
                : (
                    <>
                        <MovieContainer>
                            {popularMovies.map(({
                                id,
                                poster_path,
                                title,
                                release_date,
                                vote_average,
                                vote_count,
                                genre_ids,
                            }) =>
                                <MovieTile
                                    key={id}
                                    id={id}
                                    poster_path={poster_path}
                                    title={title}
                                    release_date={release_date}
                                    vote_average={vote_average}
                                    vote_count={vote_count}
                                    genre_ids={genre_ids}
                                ></MovieTile>
                            )}
                        </MovieContainer>
                        <BottomNavbar />
                    </>
                )
            }
        </>
    );
};

export default MoviesPage;