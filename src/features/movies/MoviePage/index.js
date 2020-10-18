import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import {
  setActivePath,
  selectLoading,
  selectItemData,
  setItemId,
  selectExtraData,
  selectError,
  resetState,
} from "../../itemSlice";
import language from "./../../../common/language";
import apiKey from "./../../../common/apiKey";
import { PeopleContainer } from "../../../common/tiles/TileContainer";
import PersonTile from "../../../common/tiles/PersonTile";
import Header from "../../../common/Header";
import BigMovieTile from "../../../common/tiles/BigMovieTile";
import Error from "../../../common/Error";
import Button from "../../../common/Button";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector(selectItemData);
  const castCrewData = useSelector(selectExtraData);
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const [castDisplayed, setCastDisplayed] = useState(10);
  const [crewDisplayed, setCrewDisplayed] = useState(10);

  useEffect(() => {
    dispatch(
      setActivePath({
        path1: `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`,
        path2: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
      }),
    );
    dispatch(setItemId(id));

    return () => {
      dispatch(resetState());
    };
  }, [id]);

  return (
    <>
      {loading
        ? <Loading />
        : isError
          ? <Error />
          : (
            <>
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

              {castCrewData.cast.length > 0 &&
                <>
                  <Header as="h2">
                    Cast
                    {(
                      castCrewData.cast.length > 10
                      && castCrewData.cast.length === castDisplayed
                    ) &&
                      <Button onClick={() => { setCastDisplayed(10) }}>Hide</Button>
                    }</Header>
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
                  {(castCrewData.cast.length > 10 && castCrewData.cast.length === castDisplayed) &&
                    <Button onClick={() => { setCastDisplayed(10) }}>Hide</Button>
                  }
                </>

              }
              {castCrewData.crew.length > 0 &&
                <>
                  <Header as="h2">
                    Crew
                    {(
                      castCrewData.crew.length > 10
                      && castCrewData.crew.length === crewDisplayed
                    )
                      &&
                      <Button onClick={() => { setCrewDisplayed(10) }}>Hide</Button>
                    }
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
                  {(castCrewData.crew.length > 10 && castCrewData.crew.length === crewDisplayed) &&
                    <Button onClick={() => { setCrewDisplayed(10) }}>Hide</Button>
                  }
                </>
              }
            </>
          )}
    </>
  );
};

export default MoviePage;
