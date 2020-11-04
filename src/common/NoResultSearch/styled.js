import styled from "styled-components";
import { ReactComponent as PaperPlane } from "../../assets/noResultImage.svg";
import Header from "../Header";

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaperPlane = styled(PaperPlane)`
  text-align: center;
  margin: 70px;
  height: 200px;
`;

export const SearchHeader = styled(Header)`
  font-size: 20px;
  margin: 42px 15px 18px;
  text-align: center;
`;