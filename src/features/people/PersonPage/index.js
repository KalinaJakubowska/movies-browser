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
import BigPersonTile from "../../../common/tiles/BigPersonTile";
import MovieTile from "../../../common/tiles/MovieTile";
import Header from "./../../../common/Header";
import { MovieContainer } from "./../../../common/tiles/TileContainer";
import Error from "../../../common/Error";
import Button from "../../../common/Button.js";
import { WidthContainer } from "../../../styled";

const PersonPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const personData = useSelector(selectItemData);
    const castCrewData = useSelector(selectExtraData);
    const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const [castDisplayed, setCastDisplayed] = useState(8);
    const [crewDisplayed, setCrewDisplayed] = useState(8);

    useEffect(() => {
        dispatch(setActivePath({
            path1: `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=${language}`,
            path2: `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=${language}`,
        }));
        dispatch(setItemId(id));

        return () => {
            dispatch(resetState());
        };
    }, [id, dispatch])

    return (
        <WidthContainer>
            {loading
                ? <Loading />
                : isError
                    ? <Error />
                    : <>
                        <BigPersonTile
                            profile_path={personData.profile_path}
                            name={personData.name}
                            birthday={personData.birthday}
                            place_of_birth={personData.place_of_birth}
                            biography={personData.biography}
                        />

                        {castCrewData.cast.length > 0 &&
                            <>
                                <Header as="h2">
                                    Cast {`(${castCrewData.cast.length})`}
                                </Header>
                                <MovieContainer>
                                    {castCrewData.cast
                                        .slice(0, castDisplayed)
                                        .map(({
                                            poster_path,
                                            id,
                                            title,
                                            release_date,
                                            vote_average,
                                            vote_count,
                                            character,
                                            credit_id,
                                            genre_ids,
                                        }) => (
                                                <MovieTile
                                                    key={credit_id}
                                                    poster_path={poster_path}
                                                    id={id}
                                                    title={title}
                                                    release_date={release_date}
                                                    vote_average={vote_average}
                                                    vote_count={vote_count}
                                                    role={character}
                                                    genre_ids={genre_ids}
                                                />
                                            ))}
                                </MovieContainer>
                                {castCrewData.cast.length > castDisplayed &&
                                    <Button onClick={() => { setCastDisplayed(castCrewData.cast.length) }}>Show All</Button>
                                }
                                {(castCrewData.cast.length > 8 && castCrewData.cast.length === castDisplayed) &&
                                    <Button onClick={() => { setCastDisplayed(8) }}>Hide</Button>
                                }
                            </>
                        }

                        {castCrewData.crew.length > 0 &&
                            <>
                                <Header as="h2">
                                    Crew {`(${castCrewData.crew.length})`}
                                </Header>
                                <MovieContainer>
                                    {castCrewData.crew
                                        .slice(0, crewDisplayed)
                                        .map(({
                                            poster_path,
                                            id,
                                            title,
                                            release_date,
                                            vote_average,
                                            vote_count,
                                            job,
                                            credit_id,
                                            genre_ids,
                                        }) => (
                                                <MovieTile
                                                    key={credit_id}
                                                    poster_path={poster_path}
                                                    id={id}
                                                    title={title}
                                                    release_date={release_date}
                                                    vote_average={vote_average}
                                                    vote_count={vote_count}
                                                    role={job}
                                                    genre_ids={genre_ids}
                                                />
                                            ))}
                                </MovieContainer>
                                {castCrewData.crew.length > crewDisplayed &&
                                    <Button onClick={() => { setCrewDisplayed(castCrewData.crew.length) }}>Show All</Button>
                                }
                                {(castCrewData.crew.length > 8 && castCrewData.crew.length === crewDisplayed) &&
                                    <Button onClick={() => { setCrewDisplayed(8) }}>Hide</Button>
                                }
                            </>
                        }
                    </>
            }
        </WidthContainer>
    );
};

export default PersonPage;