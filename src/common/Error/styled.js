import styled from "styled-components";
import Header from "../Header";

export const ErrorContainer = styled.div`
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ErrorHeader = styled(Header)`
  margin-top: 36px;
`;

export const Text = styled.p`
  margin: 0 auto 24px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
