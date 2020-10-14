import React from "react";
import {
    BigPersonWrapper,
    PersonImage,
    PersonName,
    BigPersonDetailsContainer,
} from "./styled";
import noProfileImage from "./../../../assets/noPosterImage.svg";

const BigPersonTile = ({
    profile_path,
    name,
    birthday,
    place_of_birth,
    biography,
}) => {
    return (
        <BigPersonWrapper as="div">
            <PersonImage
                src={profile_path
                    ? `https://image.tmdb.org/t/p/h632${profile_path}`
                    : noProfileImage
                }
                alt={`Zdjęcie ${name}`}
            />
            <BigPersonDetailsContainer>
                {name &&
                    <PersonName>
                        {name}
                    </PersonName>
                }
                {birthday &&
                    <p>
                        {birthday}
                    </p>
                }
                {place_of_birth &&
                    <p>
                        {place_of_birth}
                    </p>
                }
                {biography &&
                    <p>
                        {biography}
                    </p>
                }
            </BigPersonDetailsContainer>
        </BigPersonWrapper >
    );
};

export default BigPersonTile;