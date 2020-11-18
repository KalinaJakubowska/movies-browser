import React from "react";
import Loading from "./../Loading";
import Error from "./../Error";

const Checker = ({ children, loading, isError }) => {
    return (
        <>
            {loading
                ? <Loading />
                : isError
                    ? <Error />
                    : children
            }
        </>
    )
}
export default Checker;