import {Link} from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 324px;
  height: 650px;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  color: ${({theme}) => theme.colors.woodsmoke};
`;

export const MovieWrapper = styled(Wrapper)`
  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    flex-direction: row;
    width: 90vw;
    height: 260px;
  }
  
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    flex-direction: row;
    width: 90vw;
    height: 201px;
  }

`;

export const Image = styled.img`
  display: block;
  height: 434px;
  width: 292px;
  border-radius: 5px;
  margin-bottom: 16px;
  flex-shrink: 0;

  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    width: auto;
    height: 230px;
    margin-right: 20px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    height: 169px;
    width: 114px;
    margin-right: 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const Year = styled.div`
  font-size: 16px;
  line-height: 150%;
  color: ${({theme}) => theme.colors.waterloo};

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 13px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    margin-left: 16px;
    justify-content: unset;
  }
`;
