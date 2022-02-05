import React from "react";
import styled from "styled-components";
import { Input } from "../molecules/Input";
import { Title } from '../atoms/Text/Title';
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "../molecules/IconButton";
import home from '../../assets/home.png'
import characters from '../../assets/pickle-rick.png';
import episodes from '../../assets/cover.jpg';
import { CardsContainer } from "../organisms/CardsContainer";

export const MainMenu = () => {
    const {type} = useParams();
    const history = useNavigate();
    const renderButton = (type) => {
        const buttonTypes = [
            {
                type: 'episodes',
                component: <IconButton 
                    content={'Characters'} 
                    image={characters}
                    onClick={() => history('/characters')}
                />
            },
            {
                type: 'characters',
                component: <IconButton 
                    content={'Episodes'} 
                    image={episodes}
                    onClick={() => history('/episodes')}
                />
            }
        ]

        const filterType = buttonTypes.find((item) => item.type === type)
        return filterType.component
    }

    return(
        <>
            <MainMenuStyle>
                <Title content={type}/>
                <IconsContainer>
                    <IconButton 
                        content={'Home'} 
                        image={home}
                        onClick={() => history('/')}
                    />
                    {
                    renderButton(type)
                    }
                </IconsContainer>
                <Input/>
                <CardsContainer/>
            </MainMenuStyle>
        </>
    )
};

const MainMenuStyle = styled.div`
    width: 100%;
`;

const IconsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
