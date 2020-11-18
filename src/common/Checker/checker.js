import React from "react";
import Loading from "./../Loading";
import Error from "./../Error";

const Checker = ({ children, isLoading, isError }) => {
    return (
        <>
            {isLoading
                ? <Loading />
                : isError
                    ? <Error />
                    : children
            }
        </>
    )
}
export default Checker;