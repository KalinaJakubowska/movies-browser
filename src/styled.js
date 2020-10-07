import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {inputLogo} from "./assets/input-logo.svg";

const activeClassName = "link-active";

export const Nav = styled.nav`
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  min-height: 94px;
`;

export const WidthContainer = styled.div`
  max-width: 1368px;
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
`;

export const NavContainerRight = styled(NavContainer)`
  justify-content: flex-end;
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
  color: ${({theme}) => theme.colors.white};
  padding: 13px 24px;
  margin: 0 10px;

  &.${activeClassName} {
    border: 1px solid ${({theme}) => theme.colors.white};
    border-radius: 33px;
  }
`;

export const Title = styled.p`
  color: ${({theme}) => theme.colors.white};
  font-size: 24px;
  padding-left: 16px;
  margin: 0;
  display: flex;
`;

export const Input = styled.input`
  width: 432px;
  height: 48px;
  border: 1px solid ${({theme}) => theme.colors.cornsilk};
  border-radius: 33px;
  padding-left: 64px;
  background: url(${inputLogo}) no-repeat scroll 7px 7px;

  /* Image doesn't show, work in progress */

  background-color: white;
  &:focus {
    outline: none;
  }
`;
