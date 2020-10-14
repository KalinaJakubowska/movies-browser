import styled from "styled-components";

export const TypesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const TypeBox = styled.div`
    padding: 8px 0px 0px 16px;
    position: static;
    width: 81px;
    height: 36px;
    background-color: #E4E6F0;
    border-radius: 5px;
    margin-right: 8px;
    font-size: 14px;
    line-height: 140%;
    color: #18181B;
`;

export const BigTypeBox = styled(TypeBox)`
    font-size: 14px;
    line-height: 100%;
    width: 81px;
    height: 30px;
    margin-right: 8px;
`;