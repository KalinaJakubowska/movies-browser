import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Nav = styled.nav`
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  height: 94px;
`;

export const WidthContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  height: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: inherit;
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

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
`;

export const Title = styled.p`
  color: ${({theme}) => theme.colors.white};
  font-size: 24px;
  margin: 0;
  display: flex;
`;
