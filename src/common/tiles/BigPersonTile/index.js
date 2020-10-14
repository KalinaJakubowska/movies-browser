import React from "react";
import {
    BigPersonWrapper,
    PersonImage,
    PersonName,
    BigPersonDetailsContainer,
    Detail,
    MarkedDetail,
    Description,
    BirthDetails,
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
                <BirthDetails>
                    {birthday &&
                        <Detail>
                            <MarkedDetail>Date of birth: </MarkedDetail> {birthday}
                        </Detail>
                    }
                    {place_of_birth &&
                        <Detail>
                            <MarkedDetail>Place of birth: </MarkedDetail> {place_of_birth}
                        </Detail>
                    }
                </BirthDetails>
                {biography &&
                    <Description>
                        {biography}
                    </Description>
                }
            </BigPersonDetailsContainer>
        </BigPersonWrapper >
    );
};

export default BigPersonTile;