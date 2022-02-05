import React from "react";
import styled from "styled-components";
import { Input } from "../molecules/Input";
import { Title } from '../atoms/Text/Title';
import { useParams } from "react-router-dom";
import { CardsContainer } from "../organisms/CardsContainer";
import { IconsContainer } from "../molecules/IconsContainer";

export const MainMenu = () => {
    const {type} = useParams();
    

    return(
        <>
            <MainMenuStyle>
                <Title content={type}/>
                <IconsContainer infoType={type}/>
                <Input/>
                <CardsContainer/>
            </MainMenuStyle>
        </>
    )
};

const MainMenuStyle = styled.div`
    width: 100%;
`;

