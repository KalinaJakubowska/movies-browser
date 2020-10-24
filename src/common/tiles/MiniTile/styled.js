import { Link } from "react-router-dom";
import styled from "styled-components";

export const MiniWrapper = styled(Link)`
    display: flex;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.typeBox};
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

    :hover {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

export const MiniImage = styled.img`
    display: block;
    width: 80px;
    height: 120px;
`;

export const MiniText = styled.p`
    margin-left: 24px;
`;