import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectError,
    selectSunData,
    selectIsNormalTheme,
    selectIsAutoTheme,
    setIsNormalTheme,
    setIsAutoTheme
} from "../sunsetSlice";
import { Wrapper, SwitchButton, SwitchButtonBox, SwitchAutoThemeButton, Container } from "./styled";

const Footer = () => {
    const isNormalTheme = useSelector(selectIsNormalTheme);
    const isSunsetError = useSelector(selectError);
    const isAutoTheme = useSelector(selectIsAutoTheme);
    const { sunset, sunrise } = useSelector(selectSunData);
    const dispatch = useDispatch();

    useEffect(() => {
        const sunriseTime = (new Date(sunrise)).getTime();
        const sunsetTime = (new Date(sunset)).getTime();

        const setTheme = () => {
            const currentTime = (new Date()).getTime();

            if (sunriseTime < currentTime
                && currentTime < sunsetTime
            ) {
                if (!isNormalTheme) {
                    dispatch(setIsNormalTheme(true));
                }
            }
            else {
                if (isNormalTheme) {
                    dispatch(setIsNormalTheme(false));
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
                {!isAutoTheme &&
                    <Container>
                        Light theme
                    <SwitchButtonBox
                            onClick={() => dispatch(setIsNormalTheme(!isNormalTheme))}
                        >
                            <SwitchButton
                                isAutoTheme={isAutoTheme}
                                isNormalTheme={isNormalTheme}
                            />
                        </SwitchButtonBox>
                    Dark theme
                    </Container>
                }
                {isSunsetError ||
                    <Container>
                        Auto off
                    <SwitchButtonBox
                            onClick={() => dispatch(setIsAutoTheme(!isAutoTheme))}
                        >
                            <SwitchAutoThemeButton
                                isAutoTheme={isAutoTheme}
                                isNormalTheme={isNormalTheme}
                            />
                        </SwitchButtonBox>
                    Auto on
                    </Container>
                }
            </Wrapper>
        </>
    );
};

export default Footer;