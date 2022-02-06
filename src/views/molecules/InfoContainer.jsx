import React from "react"; 
import styled from "styled-components";
import { InfoText } from "../atoms/Text/InfoText";
import { Subtitle } from "../atoms/Text/Subtitle";

export const InfoContainer = ({ 
    data,
    type
}) => {
    const renderInfoCard = (type) => {
        const infoTypes = [
            {
                type: 'characters',
                component: <div>
                                <InfoText content={`Status: ${data.status}`}/>
                                <InfoText content={`Specie: ${data.species}`}/>
                                <InfoText content={`Gender: ${data.gender}`}/>
                                <InfoText content={`Origin: ${data.origin?.name}`}/>
                            </div>
            },
            {
                type: 'episodes',
                component: <div>
                                <InfoText content={`Status: ${data.air_date}`}/>
                                <InfoText content={`Episode: ${data.episode}`}/>
                            </div>                 
            }
        ]
        const filterType = infoTypes.find((item) => item.type === type)
        return filterType.component
    }
    return(
        <>
            <InfoContainerStyle>
                <Subtitle content={data.name}/>
                {
                    renderInfoCard(type)
                }
            </InfoContainerStyle>
        </>
    )
};

const InfoContainerStyle = styled.div`
    width: 100%;
`;