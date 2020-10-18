import styled from "styled-components";

const Button = styled.button`
    text-decoration: underline;
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.waterloo};
    font-size: 20px;
`;

export default Button;