import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../listSlice";
import { InputBox, Input, StyledInputIcon } from "./styled";

const Search = () => {
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();

    return (
        <InputBox>
            <Input
                placeholder="Filtruj zadania"
                value={query}
                onChange={({ target }) => dispatch(setQuery(target.value))}
            />
            <StyledInputIcon />
        </InputBox>
    );
};

export default Search;