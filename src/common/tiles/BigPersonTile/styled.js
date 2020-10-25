import styled from "styled-components";
import { Image } from "./../tileStyles";

export const BigTileImage = styled(Image)`
  max-height: 564px;
  max-width: 399px;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    max-height: 439px;
    max-width: 312px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    max-height: 362px;
    max-width: 258px;
  }

  @media (max-width: 560px) {
    max-height: 260px;
    max-width: 186px;
  }

  @media (max-width: 490px) {
    max-height: 204px;
    max-width: 146px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    max-height: 163px;
    max-width: 116px;
  }
`;
