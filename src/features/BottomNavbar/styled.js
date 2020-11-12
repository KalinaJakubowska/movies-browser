import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/rightArrow.svg";

export const DesktopContainer = styled.div`
  width: fit-content;
  margin: 40px auto 100px;

  @media  (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px)  {
    display: none;
  }
`;

export const MobileContainer = styled(DesktopContainer)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 32px auto 60px;
  }
`;

export const Button = styled.button`
  margin: 0px 6px;
  background: ${({ theme }) => theme.colors.activeNavButton};
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.4s;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabledNavButton};
    cursor: unset;
    transform: unset;
    transition: unset;
    filter: brightness(60%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: flex;
    padding: 8px 12px;
    margin: 0 4px;
  }
`;

export const PageCounter = styled.span`
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.subtitle};
  margin: 0px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size:10px;
    margin: 0 8px;
  }
`;

export const Number = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 10px;
  }
`;

export const StyledArrowLeft = styled(arrow)`
  margin: 0 8px 0 0;
  height: 11px;
  width: 7px;
  transform: rotate(180deg);

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 8px;
    width: 5px;
  }
`;

export const StyledArrowRight = styled(StyledArrowLeft)`
  transform: unset;
  margin: 0 0 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin: 0;
  }
`;

export const DoubleArrow = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
  }
`;

export const SingleArrow = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    height: 8px;
  }
`;