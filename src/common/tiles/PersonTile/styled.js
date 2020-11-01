import styled from "styled-components";
import { Wrapper, Image, DetailsContainer, Title } from "./../tileStyles";

export const PersonWrapper = styled(Wrapper)`
  width: 248px;
  flex-direction: column;
  overflow-wrap: anywhere;
  padding: 16px;
  align-items: center;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    width: 208px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    width: 174px;
    padding: 8px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    width: 136px;
  }
`;

export const PersonImage = styled(Image)`
  width: 208px;
  object-fit: cover;
  object-position: top;
  margin-bottom: 16px;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    width: 176px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    width: 158px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    width: 120px;
  }
`;

export const PersonDetailsContainer = styled(DetailsContainer)`
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  margin: 0 auto;
`;

export const PersonName = styled(Title)`
  text-align: center;
  font-size: ${({subtitle}) => (subtitle ? "18px" : "20px")};

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-size: 16px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.p`
    font-size: ${({ textLength }) => (textLength > 20)
        ? "12px"
        : "16px"
    };
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.colors.subtitle};
    margin: 0;
`;