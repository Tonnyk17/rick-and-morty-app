import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCharacterById } from "../../redux/characterDucks";
import { getEpisodeById } from "../../redux/episodeDucks";
import { IconsContainer } from "../molecules/IconsContainer";
import { CardsContainer } from "../organisms/CardsContainer";
import { InfoCard } from "../organisms/InfoCard";

export const InfoPage = () => {
    const dispatch = useDispatch()
    const {type, id} = useParams();
    useEffect(() => {
        if(type === 'characters'){
            dispatch(getCharacterById(id))
        }
        else{
            dispatch(getEpisodeById(id))
        }
    },[])
    return(
        <>
            <InfoPageStyle>
                <IconsContainer infoType={type}/>
                <InfoCard type={type}/>
                
            </InfoPageStyle>
        </>
    )
};

const InfoPageStyle = styled.div`
    width: 100%;
`