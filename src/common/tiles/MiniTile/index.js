import React from "react";
import { MiniImage, MiniText, MiniWrapper } from "./styled";

const MiniTile = ({ searchText, data: { id, image, text } }) => {

    return (
        <MiniWrapper to={searchText === "movie"
            ? `/movies/movie/${id}`
            : `/people/person/${id}`
        }>
            <MiniImage src={image} />
            <MiniText>{text}</MiniText>
        </MiniWrapper>
    );
};

export default MiniTile;