import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import {
    setActivePath,
    selectLoading,
    selectItemData,
    setItemId,
    selectExtraData
} from "../../itemSlice";
import language from "./../../../common/language";
import apiKey from "./../../../common/apiKey";
import { PeopleContainer } from "../../../common/tiles/TileContainer";
import PersonTile from "../../../common/tiles/PersonTile";

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const movieData = useSelector(selectItemData);
    const castCrewData = useSelector(selectExtraData);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(setActivePath({
            path1: `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`,
            path2: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
        }));
        dispatch(setItemId(id));
    }, [id])

    return (
        <>
            {loading
                ? <Loading />
                :
                <>
                    <div> {movieData.title}</div>
                    <div>kafel</div>

                    <PeopleContainer>
                        {castCrewData.cast.map(({ profile_path, id, character }) =>
                            <PersonTile
                                key={id}
                                profile_path={profile_path}
                                id={id}
                                name={character}
                            />
                        )}
                    </PeopleContainer>
                    <div>crew</div>
                </>
            }
        </>
    );
};

export default MoviePage;