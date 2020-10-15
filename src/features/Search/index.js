import React from "react";
import { InputBox, Input, StyledInputIcon } from "./styled";

const Search = () => {

    return (
        <InputBox>
            <Input placeholder="Search for movies..." />
            <StyledInputIcon />
        </InputBox>
    );
};

export default Search;