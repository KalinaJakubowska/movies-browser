import styled from "styled-components";

export const LoadingContainer = styled.div`
width: 100%;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
`;

export const Image = styled.img`
    width: 91px;
    height: 91px;
    transform: rotate(360deg);
    animation: spin;
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
        from {
            transform: unset;
        }
        to {
            transform: translateX(360deg);
        }
    }
`;