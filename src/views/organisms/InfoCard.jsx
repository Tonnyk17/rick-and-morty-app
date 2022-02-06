import React from "react";
import styled from "styled-components";
import { CardImage } from "../atoms/CardImage";
import { InfoContainer } from "../molecules/InfoContainer";
import { colors } from "../atoms/Variables/color";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const InfoCard = ({type}) => {
    const selector = useSelector(store => store)
    const [renderData, setRenderData] = useState();
    const [isCharacter, setIsCharacter] = useState();

    useEffect(() => {
        if(type === 'characters'){
            setRenderData(selector.characters.character)
            setIsCharacter(true)
        }
        else{
            setRenderData(selector.episodes.episode)
            setIsCharacter(false)
        }
    },[selector, renderData])

    return(
        <>
            {
                renderData ? 
                <InfoCardStyle>
                    {
                        isCharacter ? 
                        <CardImage image={renderData.image}/>
                        :
                        null
                    }
                    <InfoContainer type={type} data={renderData}/>
                </InfoCardStyle>
                :
                null
            }
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