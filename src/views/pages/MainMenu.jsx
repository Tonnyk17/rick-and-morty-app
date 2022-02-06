import React, { useEffect } from "react";
import styled from "styled-components";
import { Input } from "../molecules/Input";
import { Title } from '../atoms/Text/Title';
import { useParams } from "react-router-dom";
import { CardsContainer } from "../organisms/CardsContainer";
import { IconsContainer } from "../molecules/IconsContainer";
import { useDispatch } from "react-redux";
import { getCharacter } from "../../redux/characterDucks";
import { useSelector } from "react-redux";
import { getEpisode } from "../../redux/episodeDucks";

export const MainMenu = () => {
    const {type} = useParams();
    const dispatch = useDispatch();
    const selector = useSelector(store => store)
    

    useEffect(() => {
       if(type === 'characters'){
           dispatch(getCharacter())
       }
       else{
            dispatch(getEpisode())
       }
    },[type,selector])


    return(
        <>
            <MainMenuStyle>
                <Title content={type}/>
                <IconsContainer infoType={type}/>
                <Input/>
                <CardsContainer type={type}/>
            </MainMenuStyle>
        </>
    )
};

const MainMenuStyle = styled.div`
    width: 100%;
`;

