import React from "react";

import {ReactComponent as Danger} from "../../assets/Danger.svg";
import {Text, StyledNavLink, ErrorContainer, ErrorHeader} from "./styled";

const Error = () => {
  return (
    <ErrorContainer>
      <Danger />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <Text>
        Please check your network connection <br /> and try again
      </Text>
      <StyledNavLink to="/movies">Back to homepage</StyledNavLink>
    </ErrorContainer>
  );
};

export default Error;
