import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setActivePath,
  selectLoading,
  selectItemData,
  setItemId,
  selectExtraData,
  selectError,
} from "../../itemSlice";
import { language, apiKey, apiBaseLink } from "./../../../common/commonValues";
import { PeopleContainer } from "../../../common/tiles/TileContainer";
import PersonTile from "../../../common/tiles/PersonTile";
import Header from "../../../common/Header";
import BigMovieTile from "../../../common/tiles/BigMovieTile";
import Button from "../../../common/Button";
import Banner from "./Banner";
import { WidthContainer } from "../../../styled";
import Checker from "../../../common/Checker/checker";

const MoviePage = () => {
  const displayedItemsNumber = 10;
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector(selectItemData);
  const castCrewData = useSelector(selectExtraData);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const [castDisplayed, setCastDisplayed] = useState(displayedItemsNumber);
  const [crewDisplayed, setCrewDisplayed] = useState(displayedItemsNumber);

  useEffect(() => {
    dispatch(
      setActivePath({
        path1: `${apiBaseLink}movie/${id}${apiKey}${language}`,
        path2: `${apiBaseLink}movie/${id}/credits${apiKey}`,
      }),
    );
    dispatch(setItemId(id));
  }, [id, dispatch]);

  return (

    <Checker isLoading={isLoading} isError={isError} >
      {movieData.backdrop_path &&
        <Banner
          title={movieData.title}
          backdrop_path={movieData.backdrop_path}
          vote_average={movieData.vote_average}
          vote_count={movieData.vote_count}
        />
      }
      <WidthContainer>
        <BigMovieTile
          poster_path={movieData.poster_path}
          title={movieData.title}
          release_date={movieData.release_date}
          vote_average={movieData.vote_average}
          vote_count={movieData.vote_count}
          genre_ids={movieData.genres && movieData.genres.map(genre => genre.id)}
          production_countries={movieData.production_countries}
          overview={movieData.overview}
        />

        {castCrewData.cast && castCrewData.cast.length > 0 &&
          <>
            <Header as="h2">
              Cast
                    </Header>
            <PeopleContainer>
              {castCrewData.cast
                .slice(0, castDisplayed)
                .map(({ profile_path, id, character, name, credit_id }) => (
                  <PersonTile
                    key={credit_id}
                    profile_path={profile_path}
                    id={id}
                    name={name}
                    subtitle={character}
                  />
                ))}
            </PeopleContainer>
            {castCrewData.cast.length > castDisplayed &&
              <Button onClick={() => { setCastDisplayed(castCrewData.cast.length) }}>Show All</Button>
            }
            {(castCrewData.cast.length > displayedItemsNumber && castCrewData.cast.length === castDisplayed) &&
              <Button onClick={() => { setCastDisplayed(displayedItemsNumber) }}>Hide</Button>
            }
          </>

        }
        {castCrewData.crew && castCrewData.crew.length > 0 &&
          <>
            <Header as="h2">
              Crew
            </Header>
            <PeopleContainer>
              {castCrewData.crew
                .slice(0, crewDisplayed)
                .map(({ profile_path, id, job, name, credit_id }) => (
                  <PersonTile
                    key={credit_id}
                    profile_path={profile_path}
                    id={id}
                    name={name}
                    subtitle={job}
                  />
                ))}
            </PeopleContainer>
            {castCrewData.crew.length > crewDisplayed &&
              <Button onClick={() => { setCrewDisplayed(castCrewData.crew.length) }}>Show All</Button>
            }
            {(castCrewData.crew.length > displayedItemsNumber && castCrewData.crew.length === crewDisplayed) &&
              <Button onClick={() => { setCrewDisplayed(displayedItemsNumber) }}>Hide</Button>
            }
          </>
        }
      </WidthContainer>
    </Checker>
  );
};

export default MoviePage;