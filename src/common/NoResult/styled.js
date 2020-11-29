import styled, { css } from "styled-components";
import Header from "./../Header";
import { ReactComponent as PaperPlane } from "../../assets/noResultImage.svg";

export const HeaderInfo = styled(Header)`
  ${({ small }) =>
    small &&
    css`
      margin: 16px;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.text};

      @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 20px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 16px;
      }
    `}
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const StyledPaperPlane = styled(PaperPlane)`
  text-align: center;
  width: 50%;
  max-width: 400px;
  height: auto;
`;
