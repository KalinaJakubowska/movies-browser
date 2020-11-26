import { createGlobalStyle } from "styled-components";

export const footerHeight = 100;

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      overflow-y: scroll;
   }

   *,
   ::before,
   ::after {
      box-sizing: inherit;
   }

   body{
      background: ${({ theme }) => theme.colors.background};
      font-family: 'Poppins', sans-serif;
   }

   #root {
      min-height: 100vh;
      padding-bottom: ${footerHeight + 50}px;
      position: relative;
   }
`;
