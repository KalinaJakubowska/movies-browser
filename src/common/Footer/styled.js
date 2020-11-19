import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;
  background: ${({ theme }) => theme.unchangeableColors.black};
  color: ${({ theme }) => theme.unchangeableColors.white};
  height: 100px; /* The same value as main bottom-padding */
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;;
  }
`;

export const SwitchButtonBox = styled.div`
  margin: 0 10px;
  width: 70px;
  min-width: 50px;
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
  margin-left: ${({ isNormalTheme }) => isNormalTheme ? "0" : "calc(100% - 20px)"};
`;

export const SwitchAutoThemeButton = styled(SwitchButton)`
  margin-left: ${({ isAutoTheme }) => !isAutoTheme ? "0" : "calc(100% - 20px)"};
`;