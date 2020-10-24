import styled from "styled-components";
import { Image } from "./../tileStyles";

export const BigTileImage = styled(Image)`
  max-height: 564px;
  max-width: 399px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    max-height: 163px;
    max-width: 116px;
  }
`;
