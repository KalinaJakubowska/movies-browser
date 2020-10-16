import React from "react";
import Ratings from "./../../tiles/Ratings";
import {
  Title,
  Year,
  Container,
  DetailsContainer,
} from "./../tileStyles";
import { MovieWrapper, MovieImage } from "./styled";
import noPosterImage from "./../../../assets/noPosterImage.svg";
import Types from "./../Types";

const MovieTile = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
  role,
  genre_ids,
}) => {
  return (
    <MovieWrapper to={`/movies/movie/${id}`}>
      <MovieImage
        src={poster_path
          ? `https://image.tmdb.org/t/p/w342${poster_path}`
          : noPosterImage
        }
        alt={`Plakat filmu ${title}`}
      />
      <DetailsContainer>
        <Container>
          {title && (
            <Title textLength={title.length} >
              {title}
            </Title>
          )}

          {release_date && (
            <Year>
              {role
                ? `${role} (${release_date.slice(0, 4)})`
                : `${release_date.slice(0, 4)}`
              }
            </Year>
          )}
          <Types genre_ids={genre_ids} />
        </Container>
        <Ratings
          voteAverage={vote_average}
          voteCount={vote_count}
        />
      </DetailsContainer>
    </MovieWrapper>
  );
};

export default MovieTile;