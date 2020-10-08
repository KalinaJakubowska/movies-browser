import React from "react";
import { Tile } from "./styled";

const MovieTile = ({ movieInfo }) => {
    console.log(movieInfo)
    return (
        <Tile>
            <div >
            </div>
            <div>
                <p>{movieInfo.title}
                </p>
                <p>{movieInfo.release_date}
                </p>
                <p ></p>
                <p ></p>
            </div>
        </Tile>
    );
}

export default MovieTile;