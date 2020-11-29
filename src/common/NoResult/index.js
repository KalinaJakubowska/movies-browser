import React from "react";
import { HeaderInfo, StyledPaperPlane, ImageBox } from "./styled";

const NoResult = ({ urlQuery, small = false }) => {
  return (
    <>
      <HeaderInfo small={small}>
        Sorry, there are no results for
        {urlQuery ? ` "${urlQuery}".` : " your search."}
      </HeaderInfo>
      <ImageBox>
        <StyledPaperPlane />
      </ImageBox>
    </>
  );
};

export default NoResult;
