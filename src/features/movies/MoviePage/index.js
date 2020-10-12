import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import { selectLoading, selectMovieData, setMovie } from "./movieSlice";

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const movieData = useSelector(selectMovieData);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(setMovie(id));
    }, [id])

    return (
        <>
            {loading
                ? <Loading />
                :
                <>
                    <div> {movieData.title}</div>
                    <div>kafel</div>
                    <div>cast</div>
                    <div>crew</div>
                </>
            }
        </>
    );
};

export default MoviePage;