import styled from "styled-components";
import magnifier from "./../../assets/magnifier.svg";

export const Input = styled.input`
  width: 432px;
  max-width: 90vw;
  height: 48px;
  border: 1px solid ${({theme}) => theme.colors.typeBox};
  border-radius: ${({open, value}) =>
    open && value ? "24px 24px 0 0" : "33px"};
  padding-left: 64px;
  background-color: ${({theme}) => theme.unchangeableColors.white};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 150%;
    color: ${({theme}) => theme.colors.subtitle};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    min-width: 288px;
    height: 44px;
    padding-left: 40px;
    margin: 16px auto;
  }
`;

export const SearchBox = styled.form`
    position: relative;
`;

export const StyledMagnifierButton = styled.button`
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url(${magnifier});
    background-size:24px;
    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        height: 14px;
        width: 14px;
        background-size:14px;
        left: 16px;
    }
`;