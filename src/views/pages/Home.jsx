import React, { useEffect } from "react";
import styled from "styled-components";
import title from '../../assets/title.png'
import { IconButton } from "../molecules/IconButton";
import pickle from '../../assets/pickle-rick.png';
import episode from '../../assets/cover.jpg'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCharacter } from "../../redux/characterDucks";
import { useSelector } from "react-redux";

export const Home = () => {
    const history = useNavigate();
    return(
        <>
            <HomeStyles>
                <TitleImageContainer>
                    <TitleImage src={title}/>
                    <HomeIconsContainer>
                        <IconButton 
                            image={pickle} 
                            content={'Characters'} 
                            onClick={() => history('/characters')}
                        />
                        <IconButton 
                            image={episode} 
                            content={'Episodes'} 
                            onClick={() => history('/episodes')}
                        />
                    </HomeIconsContainer>
                </TitleImageContainer>
            </HomeStyles>
        </>
    )
}

const HomeStyles = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    margin-top: 100px;
`;

const TitleImageContainer = styled.div`
    width:90%;
    margin: 0 auto;
`;

const TitleImage = styled.img`
    width: 100%;
    text-align: center;
`;

const HomeIconsContainer = styled.div`
    width:80%;
    margin: 40px auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    justify-items: center;

    @media screen and (min-width: 700px){
        grid-template-columns: repeat(2,1fr);
    }
`