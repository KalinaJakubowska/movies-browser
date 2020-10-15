import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import {
    resetState,
    selectList,
    selectLoading,
    setActivePage,
    setActivePath,
} from "../../listSlice";
import { PeopleContainer } from "./../../../common/tiles/TileContainer";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import PersonTile from "./../../../common/tiles/PersonTile";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";

const PeoplePage = () => {
    const dispatch = useDispatch();
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const popularPeople = useSelector(selectList);
    const isLoading = useSelector(selectLoading);

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
            <Header>Popular People</Header>

            {isLoading
                ? <Loading />
                : (
                    <>
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
            }
        </>
    );
};

export default PeoplePage;