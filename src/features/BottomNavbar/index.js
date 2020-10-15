import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActivePage, selectNumberPages, setActivePage } from "../listSlice";
import { useReplacePageParameter } from "../pageParameters";
import {
  DesktopContainer,
  MobileContainer,
  Button,
  DoubleArrow,
  PageCounter,
  Number,
  StyledArrowLeft,
  StyledArrowRight,
} from "./styled";

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
      <>
        <DesktopContainer>
          <Button disabled={activePage === 1} onClick={() => onButtonClick(1)}>
            <StyledArrowLeft />
            {"First"}
          </Button>
          <Button
            disabled={activePage === 1}
            onClick={() => onButtonClick(activePage - 1)}>
            <StyledArrowLeft />
            {"Previous"}
          </Button>
          <PageCounter>
            Page <Number>{activePage}</Number> of <Number>{numberPages}</Number>
          </PageCounter>
          <Button
            disabled={activePage === numberPages}
            onClick={() => onButtonClick(activePage + 1)}>
            {"Next"}
            <StyledArrowRight />
          </Button>
          <Button
            disabled={activePage === numberPages}
            onClick={() => onButtonClick(numberPages)}>
            {"Last"}
            <StyledArrowRight />
          </Button>
        </DesktopContainer>
        <MobileContainer>
          <Button disabled={activePage === 1} onClick={() => onButtonClick(1)}>
            <DoubleArrow>
              <StyledArrowLeft />
              <StyledArrowLeft />
            </DoubleArrow>
          </Button>
          <Button
            disabled={activePage === 1}
            onClick={() => onButtonClick(activePage - 1)}>
            <StyledArrowLeft />
          </Button>
          <PageCounter>
            Page <Number>{activePage}</Number> of <Number>{numberPages}</Number>
          </PageCounter>
          <Button
            disabled={activePage === numberPages}
            onClick={() => onButtonClick(activePage + 1)}>
            <StyledArrowRight />
          </Button>
          <Button
            disabled={activePage === numberPages}
            onClick={() => onButtonClick(numberPages)}>
            <DoubleArrow>
              <StyledArrowRight />
              <StyledArrowRight />
            </DoubleArrow>
          </Button>
        </MobileContainer>
      </>
    );
};

export default BottomNavbar;