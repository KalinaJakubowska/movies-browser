import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActivePage, selectNumberPages, setActivePage } from "../movies/MoviesPage/moviesSlice";
import { useReplacePageParameter } from "../pageParameters";
import { Container, Button, PageCounter, Number } from "./styled";

const BottomNavbar = () => {
    const activePage = useSelector(selectActivePage);
    const numberPages = useSelector(selectNumberPages);
    const dispatch = useDispatch();
    const replacePageParameter = useReplacePageParameter();

    const onButtonClick = (page) => {
        replacePageParameter("page", page);
        dispatch(setActivePage(page));
    };

    return (
        <Container>
            <Button
                disabled={activePage === 1} onClick={() =>
                    onButtonClick(1)}
            >
                {"< First"}
            </Button>
            <Button
                disabled={activePage === 1} onClick={() =>
                    onButtonClick(activePage - 1)}
            >
                {"< Previous"}
            </Button>
            <PageCounter>
                Page <Number>{activePage}</Number> of <Number>{numberPages}</Number>
            </PageCounter>
            <Button
                disabled={activePage === numberPages} onClick={() =>
                    onButtonClick(activePage + 1)}
            >
                {"Next >"}
            </Button>
            <Button
                disabled={activePage === numberPages} onClick={() =>
                    onButtonClick(numberPages)}
            >
                {"Last >"}
            </Button>
        </Container>
    );
};

export default BottomNavbar;