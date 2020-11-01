import styled from "styled-components";
import { Image } from "./../tileStyles";
import {BigTileWrapper} from "./../bigTilesStyles";

export const BigMovieWrapper = styled(BigTileWrapper)`
  min-height: 544px;
`;


export const BigMovieImage = styled(Image)`
  float: left;
  object-fit: cover;
  width: 312px;
  height: 464px;
  margin: 0 40px 16px 0;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    margin: 0 30px 6px 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    margin: 0;
    height: 316px;
    width: unset;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    height: 169px;
  }
`;

