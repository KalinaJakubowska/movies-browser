import styled from "styled-components";
import { Wrapper } from "./tileStyles";

export const BigTileWrapper = styled(Wrapper)`
  flex-direction: row;
  width: 100%;
  padding: 40px;
  margin: 56px auto 64px;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    padding: 28px;
    margin: 36px 0 42px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    padding: 16px;
    margin: 16px auto 21px;
  }
`;

export const BigTileHeader = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-weight: 500;
    font-size: 26px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const BigDetailsContainer = styled.div`
  display: grid;
  height: fit-content;
  grid-gap: 24px;
  margin-left: 40px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    margin-left: 16px;
    grid-gap: 5px;
  }
`;


export const Detail = styled.div`
  font-size: 18px;
  line-height: 120%;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-size: 15px;
    font-weight: 400;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const MarkedDetail = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 160%;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-weight: 400;
    margin-top: 25px;
    font-size: 17px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    margin-top: 19px;
    font-size: 14px;
  }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const DesktopWrapper = styled.div`
  display: flex;
  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    display: block;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 171px;
`;