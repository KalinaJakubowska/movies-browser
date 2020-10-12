import React from "react";
import {
    PersonWrapper,
    PersonImage,
    PersonDetailsContainer,
    PersonName,
} from "./styled";
import noProfileImage from "./../../../assets/noPosterImage.svg"

const PersonTile = ({ personInfo }) => {
    return (
        <PersonWrapper to={`/people/person/${personInfo.id}`}>
            <PersonImage
                src={personInfo.profile_path
                    ? `https://image.tmdb.org/t/p/w185${personInfo.profile_path}`
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
        </PersonWrapper >
    );
};

export default PersonTile;