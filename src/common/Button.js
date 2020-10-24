import styled from "styled-components";

const Button = styled.button`
    text-decoration: underline;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: 20px;
    cursor: pointer;
`;

export default Button;