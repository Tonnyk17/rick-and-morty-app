import React from "react";
import styled from "styled-components";
import { CardImage } from "../atoms/CardImage";
import { InfoContainer } from "../molecules/InfoContainer";
import { colors } from "../atoms/Variables/color";

export const InfoCard = () => {
    return(
        <>
            <InfoCardStyle>
                <CardImage image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
                <InfoContainer/>
            </InfoCardStyle>
        </>
    )
}

const InfoCardStyle = styled.div`
    width: 70%;
    max-width: 650px;
    margin: 20px auto;
    padding: 10px;
    background-color: ${colors.blueSpace};
    border-radius:20px;
    box-shadow: 0px 0px 15px ${colors.green};

    @media screen and (min-width: 700px){
        display: flex;
        grid-gap: 10px;
    }
`