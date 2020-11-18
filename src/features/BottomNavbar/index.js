import React from "react";

import { useSelector } from "react-redux";
import { pageCondition } from "../../common/pageCondition";
import { selectMaxPageNumber } from "../listSlice";
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
  const page = pageCondition(urlPageNumber);
  const maxPageNumber = useSelector(selectMaxPageNumber);
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
          Page <Number>{page}</Number> of <Number>{maxPageNumber}</Number>
        </PageCounter>
        <Button
          disabled={page === maxPageNumber}
          onClick={() => onButtonClick(page + 1)}>
          {"Next"}
          <StyledArrowRight />
        </Button>
        <Button
          disabled={page === maxPageNumber}
          onClick={() => onButtonClick(maxPageNumber)}>
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
          Page <Number>{page}</Number> of <Number>{maxPageNumber}</Number>
        </PageCounter>
        <Button
          disabled={page === maxPageNumber}
          onClick={() => onButtonClick(page + 1)}>
          <SingleArrow>
            <StyledArrowRight />
          </SingleArrow>
        </Button>
        <Button
          disabled={page === maxPageNumber}
          onClick={() => onButtonClick(maxPageNumber)}>
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