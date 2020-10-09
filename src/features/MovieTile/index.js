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
import noPosterImage from "./../../assets/noPosterImage.svg"

const MovieTile = ({ movieInfo }) => {
    console.log(movieInfo)
    return (
        <Tile>
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
        </Tile >
    );
};

export default MovieTile;
