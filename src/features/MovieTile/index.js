import React from "react";
import Ratings from "../Ratings";
import {
  Tile,
  Image,
  Title,
  Year,
  DetailsContainer,
  Container,
} from "./styled";

const MovieTile = ({ movieInfo }) => {
  return (
    <Tile>
      <Image
        src={`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`}
        alt={`Plakat filmu ${movieInfo.title}`}
      />
      <DetailsContainer>
        <Container>
          <Title>{movieInfo.title}</Title>
          <Year>{movieInfo.release_date.slice(0, 4)}</Year>
          <div>Types</div>
        </Container>
        <Ratings />
      </DetailsContainer>
    </Tile>
  );
};

export default MovieTile;
