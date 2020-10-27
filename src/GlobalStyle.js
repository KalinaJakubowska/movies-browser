import { createGlobalStyle } from "styled-components";

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

   main{
      padding-bottom: 50px;
      /* The same value as Footer height */
   }

   #root {
      min-height: 100vh;
      position: relative;
   }
`;