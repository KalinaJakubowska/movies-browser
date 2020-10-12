import styled from "styled-components";

const Header = styled.h1`
  margin: 56px 0 24px;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({theme}) => theme.colors.woodsmoke};

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    margin: 24px 0 12px;
    padding-left: 16px;
  }
`;

export default Header;
