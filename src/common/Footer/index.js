import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../commonSlice";
import { Wrapper, SwitchButton, SwitchButtonBox } from "./styled";

const Footer = () => {
    const dispatch = useDispatch();
    const isNormalTheme = useSelector(selectTheme);

    return (
        <Wrapper>
            <SwitchButtonBox >
                <SwitchButton
                    isNormalTheme={isNormalTheme}
                    onClick={() => dispatch(setTheme(!isNormalTheme))}
                />
            </SwitchButtonBox>
        </Wrapper>
    );
};

export default Footer;