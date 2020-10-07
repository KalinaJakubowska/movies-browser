import styled from "styled-components";

export const Tile = styled.article`
    background: ${({theme}) => theme.color.white};
    padding: 36px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img `
    width: 312px;
    height: 464px;
`;
export const Content = styled.div `
`;

export const Title = styled.header `
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
`;

export const Genre = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 12px -12px;
`;

export const Tag = styled.li `
    background: ${({theme} => theme.color.cornsilk)};
    padding: 8px 16px;
    font-size: 16px;
    margin: 12px;
    border-radius: 5px;
`;

export const Year = styled.div `
    font-size: 16px;
`;

export const Depiction = styled.p`
    font-size: 20px;
    margin: 24px 0 0 0;
    line-height: 1.6;
`;