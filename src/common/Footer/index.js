import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSunData, selectTheme, selectAutoTheme, setNormalTheme, setAutoTheme } from "../commonSlice";
import { Wrapper, SwitchButton, SwitchButtonBox, SwitchAutoThemeButton, Container } from "./styled";

const Footer = () => {
    const dispatch = useDispatch();
    const isNormalTheme = useSelector(selectTheme);
    const isAutoTheme = useSelector(selectAutoTheme);
    const { sunset, sunrise } = useSelector(selectSunData);


    const setTheme = (sunrise, sunset) => {
        const actualDate = new Date();

        if (sunrise.getTime() < actualDate.getTime() && actualDate.getTime() < sunset.getTime()) {
            dispatch(setNormalTheme(true));
        }
        else {
            dispatch(setNormalTheme(false));
        }
    };

    useEffect(() => {
        const sunriseTime = new Date(sunrise);
        const sunsetTime = new Date(sunset);

        if (isAutoTheme && sunset && sunrise) {
            setTheme(sunriseTime, sunsetTime)

            const intervalId = setInterval(() => {
                setTheme(sunriseTime, sunsetTime)
            }, 60000);

            return () => {
                clearInterval(intervalId);
            }
        }
    }, [isAutoTheme, sunrise, sunset]);

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