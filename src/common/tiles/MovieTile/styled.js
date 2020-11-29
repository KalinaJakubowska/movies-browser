import styled from "styled-components";
import { Wrapper, Image } from "./../tileStyles";

export const MovieWrapper = styled(Wrapper)`
  flex-direction: column;
  width: 324px;
  padding: 16px;
  min-height: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
      flex-direction: row;
      width: 100%;
      min-height: unset;
  }
`;

export const MovieImage = styled(Image)`
  height: 434px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    height: 230px;
    margin-right: 20px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 169px;
    margin-right: 0;
  }
`;