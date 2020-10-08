import React from "react";
import Header from "../Header";
import {StyledPaperPlane, ImageBox} from "./styled";

const NoResult = () => {
  return (
    <>
      <Header>Sorry, there are no results for "Input"</Header>
      <ImageBox>
        <StyledPaperPlane />
      </ImageBox>
    </>
  );
};

export default NoResult;
