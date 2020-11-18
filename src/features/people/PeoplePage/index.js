import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavbar from "../../BottomNavbar";
import {
    selectError,
    selectList,
    selectLoading,
    selectTotalResults,
    setActivePath,
} from "../../listSlice";
import { PeopleContainer } from "../../../common/tiles/tileContainers";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import PersonTile from "./../../../common/tiles/PersonTile";
import { apiKey, language, apiBaseLink } from "../../../common/commonValues";
import NoResult from "../../../common/NoResult";
import { WidthContainer } from "../../../styled";
import Checker from "../../../common/Checker/checker";
import { pageCondition } from "../../../common/pageCondition";

const PeoplePage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const page = pageCondition(urlPageNumber);
    const urlQuery = usePageParameter("search");
    const resultsPage = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(setActivePath(urlQuery
            ? `${apiBaseLink}search/person${apiKey}${language}&query=${urlQuery}&page=${page}`
            : `${apiBaseLink}person/popular${apiKey}${language}&page=${page}`)
        );
    }, [urlPageNumber, urlQuery, dispatch]);

    return (
        <WidthContainer>
            <Checker isLoading={isLoading} isError={isError}>
                {!resultsPage.length
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
                }
            </Checker>
        </WidthContainer>
    );
};

export default PeoplePage;