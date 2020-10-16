import React from "react";
import Header from "../Header";
import { StyledPaperPlane, ImageBox } from "./styled";

const NoResult = ({ urlQuery }) => {
  return (
    <>
      <Header>Sorry, there are no results for {urlQuery}</Header>
      <ImageBox>
        <StyledPaperPlane />
      </ImageBox>
    </>
  );
};

export default NoResult;