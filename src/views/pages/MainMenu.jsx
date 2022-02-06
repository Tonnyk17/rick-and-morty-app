import React, { useEffect } from "react";
import styled from "styled-components";
import { Input } from "../molecules/Input";
import { Title } from '../atoms/Text/Title';
import { useParams } from "react-router-dom";
import { CardsContainer } from "../organisms/CardsContainer";
import { IconsContainer } from "../molecules/IconsContainer";
import { useDispatch } from "react-redux";
import { getCharacter } from "../../redux/characterDucks";
import { getEpisode } from "../../redux/episodeDucks";
import { ButtonsContainer } from "../molecules/ButtonsContainer";

export const MainMenu = () => {
    const {type} = useParams();
    const dispatch = useDispatch();
 

    useEffect(() => {
       if(type === 'characters'){
           dispatch(getCharacter())
       }
       else if (type === 'episodes'){
            dispatch(getEpisode())   
       }
    },[type])

    return(
        <>
            <MainMenuStyle>
                <Title content={type}/>
                <IconsContainer infoType={type}/>
                <Input type={type}/>
                <ButtonsContainer type={type}/>
                <CardsContainer type={type}/>
            </MainMenuStyle>
        </>
    )
};

const MainMenuStyle = styled.div`
    width: 100%;
`;

