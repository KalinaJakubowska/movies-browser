import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import {
    selectList,
    selectLoading,
    setActivePage,
    setActivePath,
} from "../../listSlice";
import { PeopleContainer } from "./styled";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";
import PersonTile from "./../../../common/tiles/PersonTile"

const PeoplePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActivePath("popularPeople"));
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
                            {popularPeople.map(person =>
                                <PersonTile key={person.id} personInfo={person}/>
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