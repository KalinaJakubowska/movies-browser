import styled from "styled-components";
import { Wrapper, DetailsContainer } from "./../tileStyles";

export const BigPersonWrapper = styled(Wrapper)`
    flex-direction: row;
    width: 100%;
    padding: 40px;
    margin: 56px auto 64px;
`;

export const PersonImage = styled.img`
    width: 399px;
    height: 564px;
`;

export const PersonName = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
`;

export const BigPersonDetailsContainer = styled(DetailsContainer)`
    margin-left: 40px;
    justify-content: start;
`;