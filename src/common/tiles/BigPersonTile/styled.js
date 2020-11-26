import styled from "styled-components";
import { BigImage } from "./../bigTilesStyles";

export const BigPersonImage = styled(BigImage)`
  height: 564px;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    height: 439px;
    margin-right: 25px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    height: 300px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    height: 163px;
    margin-right: 16px;
  }
`;