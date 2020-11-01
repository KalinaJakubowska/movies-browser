import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSunData, selectTheme, selectAutoTheme, setNormalTheme, setAutoTheme } from "../commonSlice";
import { Wrapper, SwitchButton, SwitchButtonBox, SwitchAutoThemeButton, Container } from "./styled";

const Footer = () => {
    const isNormalTheme = useSelector(selectTheme);
    const isAutoTheme = useSelector(selectAutoTheme);
    const { sunset, sunrise } = useSelector(selectSunData);
    const dispatch = useDispatch();

    useEffect(() => {
        const sunriseTime = (new Date(sunrise)).getTime();
        const sunsetTime = (new Date(sunset)).getTime();

        const setTheme = () => {
            const actualTime = (new Date()).getTime();

            if (sunriseTime < actualTime
                && actualTime < sunsetTime
            ) {
                if (!isNormalTheme) {
                    dispatch(setNormalTheme(true));
                }
            }
            else {
                if (isNormalTheme) {
                    dispatch(setNormalTheme(false));
                }
            }
        };

        if (isAutoTheme && sunset && sunrise) {
            setTheme()

            const intervalId = setInterval(() => {
                setTheme()
            }, 60000);

            return () => {
                clearInterval(intervalId);
            }
        }
    }, [isAutoTheme, sunrise, sunset, isNormalTheme, dispatch]);

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
                        onClick={() => !isAutoTheme && dispatch(setNormalTheme(!isNormalTheme))}
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