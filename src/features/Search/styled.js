import styled from "styled-components";
import InputIcon from "./../../assets/input-logo.svg";

export const Input = styled.input`
    width: 432px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.cornsilk};
    border-radius: ${({ open, value }) => open && value ? "24px 24px 0 0" : "33px"};
    padding-left: 64px;
    background-color: white;

    &:focus {
        outline: none;
    }

    &::placeholder {
        font-size: 16px;
        line-height: 150%;
        color: ${({ theme }) => theme.colors.waterloo};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 288px;
        height: 44px;
        padding-left: 40px;
    }
`;

export const SearchBox = styled.form`
    position: relative;
`;

export const StyledLensButton = styled.button`
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url(${InputIcon});
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