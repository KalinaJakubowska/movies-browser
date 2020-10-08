import React from "react";
import {
    Tile,
    Image,
    Title,
    Year,
    DetailsContainer,
    Container
} from "./styled";

const MovieTile = ({ movieInfo }) => {
    console.log(movieInfo)
    return (
        <Tile>
            <Image src={movieInfo.poster_path} alt={`Plakat filmu ${movieInfo.title}`} />
            <DetailsContainer>
                <Container>
                    <Title>{movieInfo.title}
                    </Title>
                    <Year>{(movieInfo.release_date).slice(0, 4)}
                    </Year>
                    <div >Types</div>
                </Container>
                <div >Ratings</div>
            </DetailsContainer>
        </Tile>
    );
}

export default MovieTile;