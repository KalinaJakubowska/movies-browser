import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../commonSlice";
import { Wrapper, SwitchButton } from "./styled";

const Footer = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    return (
        <Wrapper>
            <SwitchButton onClick={() => dispatch(setTheme(!theme))}></SwitchButton>
        </Wrapper>
    );
};

export default Footer;