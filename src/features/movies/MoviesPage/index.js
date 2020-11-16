import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import MovieTile from "../../../common/tiles/MovieTile";
import {
    selectList,
    selectLoading,
    setActivePath,
    selectError,
    selectTotalResults,
} from "../../listSlice";
import { MovieContainer } from "./../../../common/tiles/TileContainer";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import { apiKey, language, apiBaseLink } from "../../../common/commonValues";
import NoResult from "./../../../common/NoResult"
import Error from "../../../common/Error";
import { WidthContainer } from "../../../styled";
import { selectGenres } from "../../../common/commonSlice";
import Types from "../../../common/tiles/Types";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const resultsPage = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const genresList = useSelector(selectGenres);

    useEffect(() => {
        const enabledGenres = genresList
            .filter(genre => genre.enabled && genre.id)
            .map(genre => genre.id);

        dispatch(setActivePath(urlQuery
            ? `${apiBaseLink}search/movie${apiKey}${language}&query=${urlQuery}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`
            : `${apiBaseLink}discover/movie${apiKey}${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}&with_genres=${enabledGenres.join(",")}`
        ));
    }, [urlPageNumber, urlQuery, dispatch, genresList]);

    return (
        <WidthContainer>
            {!urlQuery && (
                <Types
                    genre_ids={genresList.map(genre => genre.id)}
                    clickable={true}
                    big={true}
                />
            )}
            {loading
                ? <Loading />
                : isError
                    ? <Error />
                    : (!resultsPage.length
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
                    )
            }
        </WidthContainer>
    );
};

export default MoviesPage;