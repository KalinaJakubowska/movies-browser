import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import MovieTile from "../../MovieTile";
import {
    selectList,
    selectLoading,
    setActivePage,
} from "../../listSlice";
import { MoviesContainer } from "./styled";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";

const MoviesPage = () => {
    const urlPageNumber = +usePageParameter("page");
    const popularMovies = useSelector(selectList);
    const isLoading = useSelector(selectLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [urlPageNumber])

    return (
        <>
            <Header>Popular movies</Header>

            {isLoading
                ? <Loading />
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