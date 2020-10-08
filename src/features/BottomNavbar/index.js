import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActivePage, selectNumberPages, setActivePage } from "../movies/MoviesPage/moviesSlice";
import { Button, PageCounter, Number } from "./styled";

const BottomNavbar = () => {
    const activePage = useSelector(selectActivePage);
    const numberPages = useSelector(selectNumberPages);
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                disabled={activePage === 1} onClick={() =>
                    dispatch(setActivePage(1))}
            >
                {"< First"}
            </Button>
            <Button
                disabled={activePage === 1} onClick={() =>
                    dispatch(setActivePage(activePage - 1))}
            >
                {"< Previous"}
            </Button>
            <PageCounter>
                Page <Number>{activePage}</Number> of <Number>{numberPages}</Number>
            </PageCounter>
            <Button
                disabled={activePage === numberPages} onClick={() =>
                    dispatch(setActivePage(activePage + 1))}
            >
                {"Next >"}
            </Button>
            <Button
                disabled={activePage === numberPages} onClick={() =>
                    dispatch(setActivePage(numberPages))}
            >
                {"Last >"}
            </Button>
        </div>
    );
};

export default BottomNavbar;