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

const MoviesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActivePath("popularMovies"));

        return () => {
            dispatch(resetState());
        };
    }, []);

    const urlPageNumber = +usePageParameter("page");
    const popularMovies = useSelector(selectList);
    const isLoading = useSelector(selectLoading);


    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [urlPageNumber]);

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
                                credit_id,
                            }) =>
                                <MovieTile
                                    key={credit_id}
                                    id={id}
                                    poster_path={poster_path}
                                    title={title}
                                    release_date={release_date}
                                    vote_average={vote_average}
                                    vote_count={vote_count}
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