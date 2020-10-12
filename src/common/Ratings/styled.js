import styled from "styled-components";

export const Container = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

export const Star = styled.img`
  width: 24px;
  height: 22.87px;
`;

export const Rate = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 0 12px;
`;

export const Votes = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};
`;
