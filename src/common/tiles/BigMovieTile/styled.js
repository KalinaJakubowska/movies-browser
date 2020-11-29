import styled from "styled-components";
import { BigImage } from "./../bigTilesStyles";

export const BigMovieImage = styled(BigImage)`
  height: 464px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    height: 316px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 169px;
  }
`;