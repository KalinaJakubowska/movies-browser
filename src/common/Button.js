import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.unchangeableColors.white};
  background-color: ${({ theme }) => theme.colors.backButton};
  margin-bottom: 12px;

  ${({ big }) =>
    big &&
    css`
      padding: 16px 24px;
    `}
`;

export default Button;
