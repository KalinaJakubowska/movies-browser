import React from "react";
import { MiniImage, MiniText, MiniWrapper } from "./styled";

const MiniTile = ({ pathText, data: { id, image, text } }) => {

    return (
        <MiniWrapper to={pathText === "movie"
            ? `/movies/movie/${id}`
            : `/people/person/${id}`
        }>
            <MiniImage src={image} />
            <MiniText>{text}</MiniText>
        </MiniWrapper>
    );
};

export default MiniTile;