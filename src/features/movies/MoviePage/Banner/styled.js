import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    background-color: black;
    color: ${({ theme }) => theme.colors.white};
`;

export const WidthBackdropContainer = styled.div`
    max-width: 1368px;
    position: relative;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.screenSmall}px) {
        margin: 0 10%;
    }
`;

export const Backdrop = styled.img`
    display: block;
    width: 100%;
`;

export const MovieDetails = styled.div`
    background: linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
    background-position: center;
    background-size: 140%;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: bottom;
`;

export const RatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    margin-bottom: 10px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    margin-bottom: 4px;
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  margin-bottom: 24px;
  color: inherit;

  -webkit-text-stroke: 1px black;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    margin-bottom: 5px;
  }

  @media (max-width: 1000px) {
    font-size: 58px;
  }

  @media (max-width: 900px) {
    font-size: 50px;
  }

  @media (max-width: 800px) {
    font-size: 42px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-size: 34px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 24px;
  }
`;

export const Star = styled.img`
  width: 40px;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    width: 22px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    width: 14px;
  }
`;

export const Count = styled.span`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    line-height: 100%;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-size: 22px;
    margin-bottom: 4px;
    margin-right: 16px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    margin-right: 8px;
  }
`;

export const Votes = styled.span`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 120%;
  font-weight: 400;

  @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
    margin-bottom: 0;
    font-size: 15px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-size: 13px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 10px;
  }
`;