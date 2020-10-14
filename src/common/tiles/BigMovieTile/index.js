import React from "react";
import Ratings from "../../Ratings";
import {
    BigTileWrapper,
    BigTileHeader,
    BigDetailsContainer,
    Detail,
    MarkedDetail,
    Description,
    DetailsWrapper,
} from "../bigTilesStyles";
import { BigMovieImage } from "./styled";
import noPosterImage from "./../../../assets/noPosterImage.svg";

const BigMovieTile = ({
    poster_path,
    title,
    release_date,
    vote_average,
    vote_count,
    genres,
    production_countries,
    overview,
}) => {
    return (
        <BigTileWrapper as="div">
            <BigMovieImage
                src={poster_path
                    ? `https://image.tmdb.org/t/p/w342${poster_path}`
                    : noPosterImage
                }
                alt={`Plakat filmu ${title}`}
            />
            <BigDetailsContainer>
                {title &&
                    <BigTileHeader>
                        {title}
                    </BigTileHeader>
                }
                <DetailsWrapper>
                    {production_countries &&
                        <Detail>
                            <MarkedDetail>Production: </MarkedDetail> {production_countries.map(country => `${country}`)}
                        </Detail>
                    }
                    {release_date &&
                        <Detail>
                            <MarkedDetail>Release date: </MarkedDetail> {release_date}
                        </Detail>
                    }
                </DetailsWrapper>
                <div>types</div>
                <Ratings
                    voteAverage={vote_average}
                    voteCount={vote_count}
                />
                {overview &&
                    <Description>
                        {overview}
                    </Description>
                }
            </BigDetailsContainer>
        </BigTileWrapper >
    );
};

export default BigMovieTile;