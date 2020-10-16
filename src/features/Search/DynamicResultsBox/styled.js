import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 500px;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 0 0 10px 10px;
    border: 1px solid ${({ theme }) => theme.colors.cornsilk};
    border-top: none;

    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        border-radius:10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.cornsilk};
        border-radius: 10px;
    }
`;