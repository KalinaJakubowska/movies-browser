import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavbar from "../../BottomNavbar";
import MovieTile from "../../../common/tiles/MovieTile";
import {
    selectList,
    selectLoading,
    setActivePath,
    selectError,
    selectTotalResults,
} from "../../listSlice";
import { MovieContainer } from "../../../common/tiles/tileContainers";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import { apiKey, language, apiBaseLink } from "../../../common/commonValues";
import NoResult from "./../../../common/NoResult"
import { WidthContainer } from "../../../styled";
import { selectGenres, selectEnabledGenres } from "../../../common/commonSlice";
import Types from "../../../common/tiles/Types";
import Checker from "../../../common/Checker/checker";
import { pageCondition } from "../../../common/pageCondition";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const page = pageCondition(urlPageNumber);
    const resultsPage = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const genresList = useSelector(selectGenres);
    const enabledGenres = useSelector(selectEnabledGenres);

    useEffect(() => {
        dispatch(setActivePath(urlQuery
            ? `${apiBaseLink}search/movie${apiKey}${language}&query=${urlQuery}&page=${page}`
            : `${apiBaseLink}discover/movie${apiKey}${language}&sort_by=popularity.desc&page=${page}&with_genres=${enabledGenres.join(",")}`
        ));
    }, [urlPageNumber, urlQuery, dispatch, genresList, page]);

    return (
        <WidthContainer>
            {!urlQuery && (
                <Types
                    genre_ids={genresList.map(genre => genre.id)}
                    clickable={true}
                    big={true}
                />
            )}
            <Checker isError={isError} isLoading={isLoading}>
                {!resultsPage.length
                    ? <NoResult
                        urlQuery={urlQuery}
                    />
                    : (
                        <>
                            <Header>
                                {urlQuery
                                    ? `Search results for "${urlQuery}" (${totalResults})`
                                    : "Popular Movies"
                                }
                            </Header>
                            <MovieContainer>
                                {resultsPage.map(({
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
                }
            </Checker>
        </WidthContainer>
    );
};

export default MoviesPage;