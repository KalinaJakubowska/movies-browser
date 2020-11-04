import React from "react";

import { useSelector } from "react-redux";
import { selectNumberPages } from "../listSlice";
import { usePageParameter, useReplacePageParameters } from "../pageParameters";
import {
  DesktopContainer,
  MobileContainer,
  Button,
  DoubleArrow,
  PageCounter,
  Number,
  StyledArrowLeft,
  StyledArrowRight,
  SingleArrow,
} from "./styled";

const BottomNavbar = () => {
  const urlPageNumber = +usePageParameter("page");
  const page = urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber;
  const numberPages = useSelector(selectNumberPages);
  const replacePageParameters = useReplacePageParameters();

  const onButtonClick = (page) => {
    replacePageParameters([
      {
        key: "page",
        value: page,
      },
    ]);
  };

  return (
    <>
      <DesktopContainer>
        <Button disabled={page === 1} onClick={() => onButtonClick(1)}>
          <StyledArrowLeft />
          {"First"}
        </Button>
        <Button disabled={page === 1} onClick={() => onButtonClick(page - 1)}>
          <StyledArrowLeft />
          {"Previous"}
        </Button>
        <PageCounter>
          Page <Number>{page}</Number> of <Number>{numberPages}</Number>
        </PageCounter>
        <Button
          disabled={page === numberPages}
          onClick={() => onButtonClick(page + 1)}>
          {"Next"}
          <StyledArrowRight />
        </Button>
        <Button
          disabled={page === numberPages}
          onClick={() => onButtonClick(numberPages)}>
          {"Last"}
          <StyledArrowRight />
        </Button>
      </DesktopContainer>
      <MobileContainer>
        <Button disabled={page === 1} onClick={() => onButtonClick(1)}>
          <DoubleArrow>
            <StyledArrowLeft />
            <StyledArrowLeft />
          </DoubleArrow>
        </Button>
        <Button disabled={page === 1} onClick={() => onButtonClick(page - 1)}>
          <SingleArrow>
            <StyledArrowLeft />
          </SingleArrow>
        </Button>
        <PageCounter>
          Page <Number>{page}</Number> of <Number>{numberPages}</Number>
        </PageCounter>
        <Button
          disabled={page === numberPages}
          onClick={() => onButtonClick(page + 1)}>
          <SingleArrow>
            <StyledArrowRight />
          </SingleArrow>
        </Button>
        <Button
          disabled={page === numberPages}
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