import styled from "styled-components";
import { Wrapper } from "./tileStyles";

export const BigTileWrapper = styled(Wrapper)`
  display: block;
  width: 100%;
  padding: 40px;
  margin: 40px auto 64px;
  
  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    min-height: 519px;
  }
  

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    min-height: unset;
    padding: 25px;
    margin: 23px 0 42px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    padding: 16px;
    margin: 7px auto 21px;
  }
`;

export const BigTileHeader = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-bottom: 24px;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const BigDetailsContainer = styled.div`
  display: grid;
  height: fit-content;
  grid-gap: 24px;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    display: grid;
    margin-left: 28px;
    grid-gap: 12px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    margin-left: 16px;
    grid-gap: 5px;
  }
`;


export const Detail = styled.div`
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 8px;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const MarkedDetail = styled.span`
    color: ${({ theme }) => theme.colors.detailName};
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
  margin-bottom: 24px;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    margin-bottom: 0;
    display: grid;
    grid-gap: 8px;
  }
`;

export const DesktopWrapper = styled.div`
  display: block;

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

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    margin-bottom: 20px;
  }
`;