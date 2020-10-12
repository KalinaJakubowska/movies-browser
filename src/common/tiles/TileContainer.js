import styled from "styled-components";

export const MovieContainer = styled.div`
    width: 1368px;
    margin: 24px auto 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
`

export const PeopleContainer = styled(MovieContainer)`
    grid-template-columns: repeat(6, 1fr);
`