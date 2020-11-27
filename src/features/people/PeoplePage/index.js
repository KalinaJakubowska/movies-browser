import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pager from "../../Pager";
import {
  selectError,
  selectList,
  selectLoading,
  selectTotalResults,
  fetchList,
  resetState,
} from "../../listSlice";
import { PeopleContainer } from "../../../common/tiles/tileContainers";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import PersonTile from "./../../../common/tiles/PersonTile";
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
    dispatch(fetchList({ urlQuery, page, type: "people" }));

    return () => resetState();
  }, [urlQuery, dispatch, page]);

  return (
    <WidthContainer>
      <Checker isLoading={isLoading} isError={isError}>
        {!resultsPage.length ? (
          <NoResult urlQuery={urlQuery} />
        ) : (
          <>
            <Header>
              {urlQuery
                ? `Search results for "${urlQuery}" (${totalResults})`
                : "Popular People"}
            </Header>
            <PeopleContainer>
              {resultsPage.map(({ profile_path, id, name }) => (
                <PersonTile
                  key={id}
                  profile_path={profile_path}
                  id={id}
                  name={name}
                />
              ))}
            </PeopleContainer>
            <Pager />
          </>
        )}
      </Checker>
    </WidthContainer>
  );
};

export default PeoplePage;
