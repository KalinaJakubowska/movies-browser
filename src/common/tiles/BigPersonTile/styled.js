import styled from "styled-components";
import { Image } from "./../tileStyles";
import {BigTileWrapper} from "./../bigTilesStyles";

export const BigPersonWrapper = styled(BigTileWrapper)`
  min-height: 644px;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    min-height: unset;
  }
`;

export const BigTileImage = styled(Image)`
  float: left;
  object-fit: cover;
  max-height: 564px;
  width: 399px;
  margin: 0 40px 16px 0;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    max-height: 439px;
    width: 312px;
    margin: 0 30px 6px 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    max-height: 362px;
    width: 258px;
    margin: 0;
  }

  @media (max-width: 560px) {
    max-height: 260px;
    width: 186px;
  }

  @media (max-width: 490px) {
    max-height: 204px;
    width: 146px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    max-height: 163px;
    width: 116px;
  }
`;
