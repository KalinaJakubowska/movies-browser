import styled from "styled-components";
import { Image } from "./../tileStyles";

export const BigMovieImage = styled(Image)`
  width: 312px;
  height: 464px;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    height: 316px;
    width: unset;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    height: 169px;
  }
`;