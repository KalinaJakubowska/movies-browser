import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import MovieTile from "../../../common/tiles/MovieTile";
import {
    selectList,
    selectLoading,
    setActivePath,
    resetState,
    selectError,
    selectTotalResults,
} from "../../listSlice";
import { MovieContainer } from "./../../../common/tiles/TileContainer";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";
import NoResult from "./../../../common/NoResult"
import Error from "../../../common/Error";
import { WidthContainer } from "../../../styled";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const popularMovies = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(setActivePath(urlQuery
            ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${urlQuery}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`)
        );

        return () => {
            dispatch(resetState());
        };
    }, [urlPageNumber, urlQuery]);

    return (
        <WidthContainer>
            {isLoading
                ? <Loading />
                : isError
                    ? <Error />
                    : (!popularMovies.length
                        ? <NoResult urlQuery={urlQuery} />
                        : (
                            <>
                                <Header>
                                    {urlQuery
                                        ? `Search results for "${urlQuery}" (${totalResults})`
                                        : "Popular Movies"
                                    }
                                </Header>
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
                                        />
                                    )}
                                </MovieContainer>
                                <BottomNavbar />
                            </>
                        )
                    )
            }
        </WidthContainer>
    );
};

export default MoviesPage;