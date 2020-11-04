import styled from "styled-components";

export const MovieContainer = styled.div`
  max-width: 1368px;
  margin: 24px auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 324px);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    grid-gap: 20px;
    grid-template-columns: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 16px;
  }

`;

export const PeopleContainer = styled(MovieContainer)`
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, 248px);

  @media (max-width: ${({ theme }) => theme.breakpoints.screenSmall}px) {
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 208px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 173px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, 136px);
  }
`;