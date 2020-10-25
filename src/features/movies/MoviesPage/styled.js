import styled from "styled-components";

export const FilterButton = styled.button`
    padding: 8px 16px;
    background: none;
    border: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.detailName};
    font-weight: normal;
    text-decoration: underline;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
    }
`;