import styled from "styled-components";
import { Wrapper, Image } from "./tileStyles";

export const BigTileWrapper = styled(Wrapper)`
  display: block;
  width: 100%;
  padding: 40px;
  margin: 40px auto 64px;
  overflow: hidden;

  &:hover {
    filter: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: flex;
    flex-direction: column;
    min-height: unset;
    padding: 25px;
    margin: 23px 0 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 16px;
    margin: 7px auto 21px;
  }
`;

export const BigImage = styled(Image)`
  margin-bottom: 4px;
  margin-right: 40px;
  width: auto;
  float: left;
`;

export const Container = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: flex;
  }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  height: fit-content;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: grid;
    grid-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 8px;
  }
`;

export const BigTileHeader = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-bottom: 24px;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const Detail = styled.div`
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const MarkedDetail = styled.span`
  color: ${({ theme }) => theme.colors.detailName};
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 160%;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-weight: 400;
    margin-top: 25px;
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;
