import styled from "styled-components";
import { Image } from "./../tileStyles";

export const BigPersonImage = styled(Image)`
  float: left;
  object-fit: cover;
  max-height: 564px;
  margin-right: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.screenSmall}px) {
    max-height: 439px;
    margin-right: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    max-height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-height: 163px;
    margin-right: 16px;
  }
`;