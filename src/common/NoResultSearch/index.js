import React from "react";
import {StyledPaperPlane, ImageBox, SearchHeader} from "./styled";

const NoResultSearch = ({urlQuery}) => {
  return (
    <>
      <SearchHeader>Sorry, there are no results for "{urlQuery}"</SearchHeader>
      <ImageBox>
        <StyledPaperPlane />
      </ImageBox>
    </>
  );
};

export default NoResultSearch;
