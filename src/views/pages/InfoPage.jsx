import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IconsContainer } from "../molecules/IconsContainer";
import { CardsContainer } from "../organisms/CardsContainer";
import { InfoCard } from "../organisms/InfoCard";

export const InfoPage = () => {
    const {type, id} = useParams();
    return(
        <>
            <InfoPageStyle>
                <IconsContainer infoType={type}/>
                <InfoCard />
                <CardsContainer/>
            </InfoPageStyle>
        </>
    )
};

const InfoPageStyle = styled.div`
    width: 100%;
`