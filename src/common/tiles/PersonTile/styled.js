import styled from "styled-components";
import { Tile, Image, DetailsContainer, Title } from "./../tileStyles";

export const PersonTile = styled(Tile)`
    width: 208px;
    height: 339px;
`;

export const PersonImage = styled(Image)`
    width: 177px;
    height: 264px;
`;

export const PersonDetailsContainer = styled(DetailsContainer)`
    grid-template-columns: repeat(6, 1fr);
`;

export const PersonName = styled(Title)`
    text-align: center;
`;