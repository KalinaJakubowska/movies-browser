import styled from "styled-components";
import {ReactComponent as PaperPlane} from "../../assets/NoResult.svg";
import Header from "../Header";

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const StyledPaperPlane = styled(PaperPlane)`
  text-align: center;
  height: 50vh;
`;

export const SearchHeader = styled(Header)`
  font-size: 20px;
  margin: 42px 15px 18px;
  text-align: center;
`;
