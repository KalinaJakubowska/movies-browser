import styled from "styled-components";

export const Container = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin-top: 8px;
  }
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;

export const Rate = styled.span`
  font-size: ${({ big }) => big ? "22px" : "16px"};
  font-weight: 600;
  margin: 0 12px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    margin: 0 7px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.unchangeableColors.waterloo};
  font-weight: normal;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 12px;
  }
`;