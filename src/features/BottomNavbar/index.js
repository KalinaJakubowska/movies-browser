import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActivePage, setActivePage } from "../movies/MoviesPage/moviesSlice";
import { Button } from "./styled";

const BottomNavbar = () => {
    const activePage = useSelector(selectActivePage);
    const dispatch = useDispatch();

    return (
        <div>
            <Button disabled={activePage === 1} onClick={() => dispatch(setActivePage(1))}>{"<<"}</Button>
            <Button disabled={activePage === 1} onClick={() => dispatch(setActivePage(activePage - 1))}>{"<"}</Button>
            <Button disabled={activePage === 500} onClick={() => dispatch(setActivePage(activePage + 1))}>{">"}</Button>
            <Button disabled={activePage === 500} onClick={() => dispatch(setActivePage(500))}>{">>"}</Button>
        </div>
    );
};

export default BottomNavbar;