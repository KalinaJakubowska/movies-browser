import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  background-color: ${({theme}) => theme.unchangeableColors.white};
  color: ${({theme}) => theme.unchangeableColors.black};
  border-radius: 0 0 10px 10px;
  border: 1px solid ${({theme}) => theme.colors.typeBox};
  border-top: none;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.typeBox};
    border-radius: 10px;
  }
`;