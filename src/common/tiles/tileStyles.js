import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width:324px;
    height:650px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.woodsmoke};
`

export const Image = styled.img`
    display: block;
    height: 434px;
    width: 292px;
    border-radius: 5px;
    margin-bottom: 16px;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`

export const Year = styled.div`
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.Waterloo};
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
`