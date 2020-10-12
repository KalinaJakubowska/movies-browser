import React from "react";
import Ratings from "./../../Ratings";
import {
    Wrapper,
    Image,
    Title,
    Year,
    Container,
    DetailsContainer,
} from "./../tileStyles";
import noPosterImage from "./../../../assets/noPosterImage.svg"

const MovieTile = ({ movieInfo }) => {
    return (
        <Wrapper to={`/movies/movie/${movieInfo.id}`}>
            <Image
                src={movieInfo.poster_path
                    ? `https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`
                    : noPosterImage
                }
                alt={`Plakat filmu ${movieInfo.title}`}
            />
            <DetailsContainer>
                <Container>
                    {movieInfo.title &&
                        <Title> {movieInfo.title}
                        </Title>
                    }
                    {movieInfo.release_date &&
                        <Year> {(movieInfo.release_date).slice(0, 4)}
                        </Year>
                    }
                    <div >Types</div>
                </Container>
                <Ratings
                    voteAverage={movieInfo.vote_average}
                    voteCount={movieInfo.vote_count}
                />
            </DetailsContainer>
        </Wrapper >
    );
};

export default MovieTile;