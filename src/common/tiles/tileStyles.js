import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  background-color: ${({ theme }) => theme.colors.tileBackground};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.shadow || "rgba(186, 199, 213, 0.5)"};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    filter: brightness(95%);
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 5px;
  flex-shrink: 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: ${({ textLength }) => (textLength > 40)
    ? "18px"
    : "22px"
  };
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const Year = styled.div`
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.subtitle};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-left: 16px;
    justify-content: unset;
  }
`;