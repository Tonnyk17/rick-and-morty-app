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
                type: 'character',
                component: <div>
                                <InfoText content={`Status: ${data.status}`}/>
                                <InfoText content={`Specie: ${data.specie}`}/>
                                <InfoText content={`Gender: ${data.gender}`}/>
                                <InfoText content={`Origin: ${data.origin}`}/>
                            </div>
            },
            {
                type: 'episode',
                component: <div>
                                <InfoText content={`Status: ${data.air_date}`}/>
                                <InfoText content={`Specie: ${data.episode}`}/>
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