import React from "react"; 
import styled from "styled-components";
import { InfoText } from "../atoms/Text/InfoText";
import { Subtitle } from "../atoms/Text/Subtitle";

export const InfoContainer = ({ 
    name,
    status, 
    origin, 
    gender, 
    specie
}) => {
    return(
        <>
            <InfoContainerStyle>
                <Subtitle content={name}/>
                <InfoText content={`Status: ${status}`}/>
                <InfoText content={`Specie: ${specie}`}/>
                <InfoText content={`Gender: ${gender}`}/>
                <InfoText content={`Origin: ${origin}`}/>
            </InfoContainerStyle>
        </>
    )
};

const InfoContainerStyle = styled.div`
    width: 100%;
`;