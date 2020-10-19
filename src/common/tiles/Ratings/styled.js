import styled from "styled-components";

export const Container = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

export const Star = styled.img`
  width: 24px;
  height: 22.87px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;

export const Rate = styled.span`
  font-size: ${({ big }) => big ? "22px" : "16px"};
  font-weight: 600;
  margin: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
    margin: 0 7px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  color: ${({ theme, big }) => big ? theme.colors.black : theme.colors.waterloo};
  font-weight: normal;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
  }
`;
