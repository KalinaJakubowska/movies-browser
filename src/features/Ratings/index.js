import React from "react";
import { Container, Star, Rate, Votes } from "./styled";
import star from "../../assets/star.svg";

const Ratings = () => {
  return (
    <Container>
      <Star src={star}/>
      <Rate>7,8</Rate>
      <Votes>35 votes</Votes>
    </Container>
  );
};

export default Ratings;
