import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";
import Loading from "../../../common/Loading";
import { selectResults, setActiveSearchPath, selectLoading } from "./../searchSlice";
import { Wrapper } from "./styled";
import NoResult from "./../../../common/NoResult";

const DynamicResultsBox = ({ query }) => {
    const dispatch = useDispatch();
    const results = useSelector(selectResults);
    const isLoading = useSelector(selectLoading);
    const location = useLocation();
    const searchText = location.pathname.includes("movie") ? "movie" : "person";

    useEffect(() => {
        dispatch(setActiveSearchPath(
            `https://api.themoviedb.org/3/search/${searchText}?api_key=${apiKey}&language=${language}&query=${query}`
        ));
    }, [query]);

    return (
        <Wrapper >
            {isLoading
                ? <Loading />
                : !results.length
                    ? <NoResult urlQuery={query} />
                    : results.map(result =>
                        <p key={result.id}>
                            {searchText === "movie"
                                ? result.title
                                : result.name
                            }
                        </p>
                    )
            }
        </Wrapper>
    );
};

export default DynamicResultsBox;