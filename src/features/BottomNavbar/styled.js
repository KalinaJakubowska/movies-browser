import styled from "styled-components";

export const Container = styled.div`
width: fit-content;
    margin: 40px auto 100px;
`;

export const Button = styled.button`
    padding: 10px;
    margin: 0px 12px;
    background: #D6E4FF;
    border-radius: 5px;
    padding: 8px 16px 8px 16px;
    color:${({ theme }) => theme.colors.mineShaft};
    border: none;
    cursor: pointer;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.cornsilk};
    }
`;

export const PageCounter = styled.span`
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 0px 24px;
`;

export const Number = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.woodsmoke};
`;