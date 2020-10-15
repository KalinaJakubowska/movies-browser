import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../listSlice";
import { useReplacePageParameters } from "../pageParameters";
import { SearchBox, Input, StyledLensButton } from "./styled";

const Search = () => {
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();
    const replacePageParameters = useReplacePageParameters();

    const onFormSubmit = (event) => {
        event.preventDefault();

        replacePageParameters([
            {
                key: "search",
                value: query,
            },
            {
                key: "page",
                value: 1,
            }
        ]);
    };

    return (
        <SearchBox onSubmit={onFormSubmit}>
            <Input
                placeholder="Search for movies"
                value={query}
                onChange={({ target }) => dispatch(setQuery(target.value))}
            />
            <StyledLensButton />
        </SearchBox>
    );
};

export default Search;