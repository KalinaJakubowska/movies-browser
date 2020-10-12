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
import { TileContainer } from "./../../../common/tiles/TileContainer";
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
                        <TileContainer>
                            {popularMovies.map(movie =>
                                <MovieTile key={movie.id} movieInfo={movie}></MovieTile>
                            )}
                        </TileContainer>
                        <BottomNavbar />
                    </>
                )
            }
        </>
    );
};

export default MoviesPage;