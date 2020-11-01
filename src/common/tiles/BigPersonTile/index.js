import React from "react";
import {
  BigTileHeader,
  Detail,
  MarkedDetail,
  Description,
  DetailsWrapper,
  Container,
  BigTileWrapper,
} from "./../bigTilesStyles";
import { BigPersonImage } from "./styled";
import noProfileImage from "./../../../assets/noPosterImage.svg";

const BigPersonTile = ({
  profile_path,
  name,
  birthday,
  place_of_birth,
  biography,
}) => {
  const date = new Date(birthday);

  return (
    <BigTileWrapper as="div">
      <Container>
        <BigPersonImage
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/h632${profile_path}`
              : noProfileImage
          }
          alt={`Zdjęcie ${name}`}
        />
        <DetailsWrapper>
          {name && <BigTileHeader>{name}</BigTileHeader>}
          {birthday && (
            <Detail>
              <MarkedDetail>Date of birth: </MarkedDetail> {`${date.toLocaleDateString()}`}
            </Detail>
          )}
          {place_of_birth && (
            <Detail>
              <MarkedDetail>Place of birth: </MarkedDetail> {place_of_birth}
            </Detail>
          )}
        </DetailsWrapper>
      </Container>
      {biography && <Description>{biography}</Description>}
    </BigTileWrapper>
  );
};

export default BigPersonTile;