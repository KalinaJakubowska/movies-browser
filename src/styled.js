import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as InputIcon } from "./assets/input-logo.svg";
import { ReactComponent as TitleLogo } from "./assets/camera-logo.svg";

const activeClassName = "link-active";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  min-height: 94px;
`;

export const WidthContainer = styled.div`
  max-width: 1400px;
  padding: 16px;
  margin: 0 auto;
  min-height: inherit;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 50%;
  min-height: inherit;
  justify-content: space-between;
  padding: 0 10px;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 71px;
  }
`;

export const NavContainerLeft = styled(NavContainer)`
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    flex-basis: 80vw;
    justify-content: space-evenly;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    justify-content: space-around;
  }
`;

export const NavContainerRight = styled(NavContainer)`
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const List = styled.ul`
  margin: 0 auto;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  padding: 13px 24px;
  margin: 0 10px;

  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 33px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 13px;
    padding: 11px 18px;
    margin: 0 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
    padding: 8px 12px;
    margin: 0 3px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  padding-left: 16px;
  margin: 0;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
    padding: 10;
    margin-right: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
    padding: 0;
    margin-right: 19px;
  }
`;

export const Input = styled.input`
  width: 432px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.cornsilk};
  border-radius: 33px;
  padding-left: 64px;

  background-color: white;
  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 288px;
    height: 44px;
    padding-left: 40px;
  }
`;

export const InputBox = styled.div`
  position: relative;
`;

export const StyledInputIcon = styled(InputIcon)`
  position: absolute;
  left: 27px;
  top: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 14px;
    left: 16px;
    top: 15px;
  }
`;

export const StyledTitleLogo = styled(TitleLogo)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 12px;
  }
`;
