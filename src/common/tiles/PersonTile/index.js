import React from "react";
import {
    PersonWrapper,
    PersonImage,
    PersonDetailsContainer,
    PersonName,
} from "./styled";
import noProfileImage from "./../../../assets/noPosterImage.svg"

const PersonTile = ({ profile_path, id, name }) => {
    return (
        <PersonWrapper to={`/people/person/${id}`}>
            <PersonImage
                src={profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : noProfileImage
                }
                alt={`Zdjęcie ${name}`}
            />
            <PersonDetailsContainer>
                <>
                    {name &&
                        <PersonName>{name}</PersonName>
                    }
                </>

            </PersonDetailsContainer>
        </PersonWrapper >
    );
};

export default PersonTile;