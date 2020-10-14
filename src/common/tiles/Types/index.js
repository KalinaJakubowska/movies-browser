import React from "react";
import { useSelector } from "react-redux";
import { selectGenres, selectLoading } from "../../commonSlice";
import { TypesWrapper, TypeBox, BigTypeBox } from "./styled";

const Types = ({ genres, big = false }) => {
    const genresList = useSelector(selectGenres);
    const loading = useSelector(selectLoading);

    return (
        <TypesWrapper>
            {((!loading && genres) && genresList.map(({ id, name }) => genres.includes(id) && (big
                ? <TypeBox key={id}>{name}</TypeBox>
                : <BigTypeBox key={id}>{name}</BigTypeBox>
            )))}
        </TypesWrapper>
    )
};

export default Types;