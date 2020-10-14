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

export const Detail = styled.div`
    font-size: 18px;
    line-height: 120%;
`;

export const MarkedDetail = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 160%;
`;

export const BirthDetails= styled.div`
    margin: 24px 0px;
    display: grid;
    grid-gap: 8px;
`;