import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import {
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
import { apiKey, language, apiBaseLink } from "../../../common/commonValues";
import NoResult from "../../../common/NoResult";
import Error from "../../../common/Error";
import { WidthContainer } from "../../../styled";

const PeoplePage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const resultsPage = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(setActivePath(urlQuery
            ? `${apiBaseLink}search/person${apiKey}${language}&query=${urlQuery}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`
            : `${apiBaseLink}person/popular${apiKey}${language}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`)
        );
    }, [urlPageNumber, urlQuery, dispatch]);

    return (
        <WidthContainer>
            {loading
                ? <Loading />
                : isError
                    ? <Error />
                    : (!resultsPage.length
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
                                    {resultsPage.map(({ profile_path, id, name }) =>
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
        </WidthContainer>
    );
};

export default PeoplePage;