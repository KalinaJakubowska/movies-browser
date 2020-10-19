import React from "react";
import star from "./../../../../assets/star.svg";
import {
    Background,
    Backdrop,
    WidthBackdropContainer,
    RatingsContainer,
    MovieDetails,
    Title,
    Star,
    Count,
    Votes,
} from "./styled";
import noProfileImage from "./../../../../assets/noProfileImage.svg";

const Banner = ({ title, backdrop_path, vote_average, vote_count }) => {

    return (
        <Background>
            <WidthBackdropContainer>
                <MovieDetails>
                    <Title>{title}</Title>
                    <RatingsContainer>
                        <Count><Star src={star} /> {vote_average} <Votes>/ 10</Votes></Count>
                        <Votes>{vote_count} votes</Votes>
                    </RatingsContainer>
                </MovieDetails>
                <Backdrop
                    src={backdrop_path
                        ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
                        : noProfileImage}
                />
            </WidthBackdropContainer>
        </Background>
    );
};

export default Banner;