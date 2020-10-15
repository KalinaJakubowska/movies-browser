import React from "react";
import { useSelector } from "react-redux";
import { selectNumberPages } from "../listSlice";
import { usePageParameter, useReplacePageParameters } from "../pageParameters";
import { Container, Button, PageCounter, Number } from "./styled";

const BottomNavbar = () => {
    const urlPageNumber = +usePageParameter("page");
    const page = urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber;
    const numberPages = useSelector(selectNumberPages);
    const replacePageParameters = useReplacePageParameters();

    const onButtonClick = (page) => {
        replacePageParameters([{
            key: "page",
            value: page,
        }]);
    };

    return (
        <Container>
            <Button
                disabled={page === 1} onClick={() =>
                    onButtonClick(1)}
            >
                {"< First"}
            </Button>
            <Button
                disabled={page === 1} onClick={() =>
                    onButtonClick(page - 1)}
            >
                {"< Previous"}
            </Button>
            <PageCounter>
                Page <Number>{page}</Number> of <Number>{numberPages}</Number>
            </PageCounter>
            <Button
                disabled={page === numberPages} onClick={() =>
                    onButtonClick(page + 1)}
            >
                {"Next >"}
            </Button>
            <Button
                disabled={page === numberPages} onClick={() =>
                    onButtonClick(numberPages)}
            >
                {"Last >"}
            </Button>
        </Container>
    );
};

export default BottomNavbar;