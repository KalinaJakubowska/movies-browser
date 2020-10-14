import React from "react";
import Ratings from "./../../tiles/Ratings";
import {
  MovieWrapper,
  Image,
  Title,
  Year,
  Container,
  DetailsContainer,
} from "./../tileStyles";
import noPosterImage from "./../../../assets/noPosterImage.svg";

const MovieTile = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
  role,
}) => {
  return (
    <MovieWrapper to={`/movies/movie/${id}`}>
      <Image
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
          <div>Types</div>
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