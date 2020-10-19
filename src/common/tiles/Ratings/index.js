import React from "react";
import { Container, Star, Rate, Votes } from "./styled";
import star from "../../../assets/star.svg";

const Ratings = ({ vote_average, vote_count, big = false }) => {
  return (
    <>
      { vote_count
        ? (
          <Container>
            <Star src={star} />
            <Rate big={big}>{vote_average}
              <Votes big={big}> {big && "/10"}</Votes>
              <Votes big={big}> {vote_count} votes</Votes>
            </Rate>

          </Container>
        )
        : <Votes big={big}>No votes yet</Votes>
      }
    </>
  );
};

export default Ratings;
