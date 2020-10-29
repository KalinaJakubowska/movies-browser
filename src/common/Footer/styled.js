import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background: ${({ theme }) => theme.unchangeableColors.black};
  color: ${({ theme }) => theme.unchangeableColors.white};
  height: 50px; /* The same value as main bottom-padding */
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const SwitchButtonBox = styled.div`
  margin: 0 10px;
  width: 90px;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.5s;
  background: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const SwitchButton = styled.button`
  cursor: pointer;
  display: block;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  height: 20px;
  width: 20px;
  padding: 0px;
  transition: all 0.5s;
  transform: ${({ isNormalTheme }) => isNormalTheme ? "unset" : "translateX(300%)"};
`;

export const SwitchAutoThemeButton = styled(SwitchButton)`
  transform: ${({ isAutoTheme }) => !isAutoTheme ? "unset" : "translateX(300%)"};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;

  ${({ disabled }) => disabled && css`
    display: none;
  `}

`;