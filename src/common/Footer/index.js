import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, selectAutoTheme, setTheme, setAutoTheme } from "../commonSlice";
import { Wrapper, SwitchButton, SwitchButtonBox, SwitchAutoThemeButton, Container } from "./styled";

const Footer = () => {
    const dispatch = useDispatch();
    const isNormalTheme = useSelector(selectTheme);
    const isAutoTheme = useSelector(selectAutoTheme);

    return (
        <>
            <Wrapper>
                <Container>
                    Auto switch with sunset
                    <SwitchButtonBox
                        onClick={() => dispatch(setAutoTheme(!isAutoTheme))}
                    >
                        <SwitchAutoThemeButton
                            isAutoTheme={isAutoTheme}
                            isNormalTheme={isNormalTheme}
                        />
                    </SwitchButtonBox>
                </Container>
                <Container disabled={isAutoTheme}>
                    Light theme
                    <SwitchButtonBox
                        onClick={() => !isAutoTheme && dispatch(setTheme(!isNormalTheme))}
                    >
                        <SwitchButton
                            isAutoTheme={isAutoTheme}
                            isNormalTheme={isNormalTheme}
                        />
                    </SwitchButtonBox>
                    Dark theme
                </Container>
            </Wrapper>
        </>
    );
};

export default Footer;