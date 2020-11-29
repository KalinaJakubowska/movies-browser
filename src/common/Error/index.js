import React from "react";
import { ReactComponent as Danger } from "../../assets/danger.svg";
import { Text, ErrorContainer, ErrorHeader } from "./styled";
import { Button } from "./../Button";

const Error = () => {
  return (
    <ErrorContainer>
      <Danger />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <Text>
        Please check your network connection <br /> and try again
      </Text>
      <Button big to="/movies">
        Back to homepage
      </Button>
    </ErrorContainer>
  );
};

export default Error;
