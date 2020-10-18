import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import {
    resetState,
    selectError,
    selectList,
    selectLoading,
    selectTotalResults,
    setActivePath,
} from "../../listSlice";
import { PeopleContainer } from "./../../../common/tiles/TileContainer";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import PersonTile from "./../../../common/tiles/PersonTile";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";
import NoResult from "../../../common/NoResult";
import Error from "../../../common/Error";

const PeoplePage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const popularPeople = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(setActivePath(urlQuery
            ? `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=${language}&query=${urlQuery}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`
            : `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=${language}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`)
        );
        return () => {
            dispatch(resetState());
        };
    }, [urlPageNumber, urlQuery]);

    return (
        <>
            {isLoading
                ? <Loading />
                : isError
                    ? <Error />
                    : (!popularPeople.length
                        ? <NoResult urlQuery={urlQuery} />
                        : (
                            <>
                                <Header>
                                    {urlQuery
                                        ? `Search results for "${urlQuery}" (${totalResults})`
                                        : "Popular People"
                                    }
                                </Header>
                                <PeopleContainer>
                                    {popularPeople.map(({ profile_path, id, name }) =>
                                        <PersonTile
                                            key={id}
                                            profile_path={profile_path}
                                            id={id}
                                            name={name}
                                        />
                                    )}
                                </PeopleContainer>
                                <BottomNavbar />
                            </>
                        )
                    )
            }
        </>
    );
};

export default PeoplePage;