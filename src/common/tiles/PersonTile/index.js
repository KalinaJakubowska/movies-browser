import React from "react";
import {
    PersonTile,
    PersonImage,
    PersonDetailsContainer,
    PersonName,
} from "./styled";
import noProfileImage from "./../../../assets/noPosterImage.svg"

const PersonPage = ({ personInfo }) => {
    return (
        <PersonTile to={`/movies/movie/${personInfo.id}`}>
            <PersonImage
                src={personInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w342${personInfo.profile_path}`
                    : noProfileImage
                }
                alt={`Zdjęcie ${personInfo.name}`}
            />
            <PersonDetailsContainer>
                <>
                    {personInfo.name &&
                        <PersonName> {personInfo.name}
                        </PersonName>
                    }
                </>

            </PersonDetailsContainer>
        </PersonTile >
    );
};

export default PersonPage;