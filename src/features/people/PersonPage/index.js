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
import BigPersonTile from "../../../common/tiles/BigPersonTile";
import MovieTile from "../../../common/tiles/MovieTile";
import Header from "./../../../common/Header";
import { MovieContainer } from "./../../../common/tiles/tileContainers";
import Button from "../../../common/Button.js";
import { WidthContainer } from "../../../styled";
import Checker from "../../../common/Checker/checker";

const PersonPage = () => {
    const displayedItemsNumber = 8;
    const { id } = useParams();
    const dispatch = useDispatch()
    const personData = useSelector(selectItemData);
    const castCrewData = useSelector(selectExtraData);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const [castDisplayed, setCastDisplayed] = useState(displayedItemsNumber);
    const [crewDisplayed, setCrewDisplayed] = useState(displayedItemsNumber);

    useEffect(() => {
        dispatch(setActivePath({
            path1: `${apiBaseLink}person/${id}${apiKey}${language}`,
            path2: `${apiBaseLink}person/${id}/movie_credits${apiKey}${language}`,
        }));
        dispatch(setItemId(id));
    }, [id, dispatch])

    return (
        <WidthContainer>
            <Checker isLoading={isLoading} isError={isError}>
                <BigPersonTile
                    profile_path={personData.profile_path}
                    name={personData.name}
                    birthday={personData.birthday}
                    place_of_birth={personData.place_of_birth}
                    biography={personData.biography}
                />

                {castCrewData.cast && castCrewData.cast.length > 0 &&
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
                        {(castCrewData.cast.length > displayedItemsNumber && castCrewData.cast.length === castDisplayed) &&
                            <Button onClick={() => { setCastDisplayed(displayedItemsNumber) }}>Hide</Button>
                        }
                    </>
                }

                {castCrewData.crew && castCrewData.crew.length > 0 &&
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
                        {(castCrewData.crew.length > displayedItemsNumber && castCrewData.crew.length === crewDisplayed) &&
                            <Button onClick={() => { setCrewDisplayed(displayedItemsNumber) }}>Hide</Button>
                        }
                    </>
                }
            </Checker>
        </WidthContainer>
    );
};

export default PersonPage;