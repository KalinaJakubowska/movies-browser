import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres, selectLoading, switchGenreEnabled } from "../../commonSlice";
import { TypesWrapper, TypeBox, BigTypeBox } from "./styled";

const Types = ({ genre_ids, big = false, clickable = false }) => {
    const genresList = useSelector(selectGenres);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    return (
        <TypesWrapper>
            {((!loading && genre_ids)
                && genresList.map(({ id, name, enabled }) => genre_ids.includes(id)
                    && (!big
                        ? <TypeBox key={id}>{name}</TypeBox>
                        : clickable
                            ? (<BigTypeBox
                                enabled={enabled}
                                clickable={clickable}
                                onClick={() => dispatch(switchGenreEnabled(id))}
                                key={id}
                            >
                                {name}
                            </BigTypeBox>
                            )
                            : <BigTypeBox key={id}>{name}</BigTypeBox>
                    )
                )
            )}
        </TypesWrapper>
    );
};

export default Types;