import styled, { css } from "styled-components";

export const TypesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -8px;
`;

export const TypeBox = styled.div`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.typeBox};
  border-radius: 5px;
  margin: 0 8px 8px 0;
  font-size: 14px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.text};
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 12px;
    font-weight: 400;
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 10px;
    font-weight: 400;
    padding: 4px 8px;
  }
`;

export const BigTypeBox = styled(TypeBox)`
  line-height: 140%;
  margin-right: 8px;

  ${({ clickable }) => clickable && css`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.activeNavButton};

    &:hover{
      filter: brightness(120%);
    }

    &:active{
      filter: brightness(140%);
    }
  `}

  ${({ enabled }) => enabled && css`
    background: ${({ theme }) => theme.colors.backButton};
    filter: brightness(160%);
  `}
`;
