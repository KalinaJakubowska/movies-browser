import React from "react";
import {
    Tile,
    Image,
    Title,
    Year,
    DetailsContainer,
    Container
} from "./styled";
import noPosterImage from "./../../assets/noPosterImage.svg"

const MovieTile = ({ movieInfo }) => {
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
                <div >Ratings</div>
            </DetailsContainer>
        </Tile >
    );
}

export default MovieTile;