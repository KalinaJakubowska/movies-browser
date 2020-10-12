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
import PersonTile from "./../../../common/tiles/PersonTile"

const PeoplePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActivePath("popularPeople"));

        return () => {
            dispatch(resetState());
        };
    }, []);

    const urlPageNumber = +usePageParameter("page");
    const popularPeople = useSelector(selectList);
    const isLoading = useSelector(selectLoading);


    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [urlPageNumber])

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