import React from "react";
import Ratings from "../Ratings";
import {
  BigTileHeader,
  Detail,
  MarkedDetail,
  Description,
  DetailsWrapper,
  Container,
  BigTileWrapper,
} from "../bigTilesStyles";
import { BigMovieImage } from "./styled";
import noPosterImage from "./../../../assets/noPosterImage.svg";
import Types from "../Types";

const BigMovieTile = ({
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
  genre_ids,
  production_countries,
  overview,
}) => {
  const date = new Date(release_date);

  return (
    <BigTileWrapper as="div">
      <Container>
        <BigMovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : noPosterImage
          }
          alt={`Plakat filmu ${title}`}
        />
        <DetailsWrapper>
          {title &&
            <BigTileHeader>{title}</BigTileHeader>
          }
          {production_countries && production_countries.length > 0 && (
            <Detail>
              <MarkedDetail>Production: </MarkedDetail>
              {production_countries.map(country => country.name).join(", ")}
            </Detail>
          )}
          {release_date && (
            <Detail>
              <MarkedDetail>Release date: </MarkedDetail> {`${date.toLocaleDateString()}`}
            </Detail>
          )}
          <Types genre_ids={genre_ids} />
          <Ratings
            vote_average={vote_average}
            vote_count={vote_count}
            big={true}
          />
        </DetailsWrapper>
      </Container>
      {overview && <Description>{overview}</Description>}
    </BigTileWrapper>
  );
};

export default BigMovieTile;