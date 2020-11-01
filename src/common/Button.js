import styled from "styled-components";

const Button = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: 20px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export default Button;