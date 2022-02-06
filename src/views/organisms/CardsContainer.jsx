import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CardText } from "../atoms/Text/CardText";
import { Card } from "../molecules/Card";
import { CardImageContainer } from "../molecules/CardImageContainer";

export const CardsContainer = ({type}) => {
    const history = useNavigate()
    const selector = useSelector(store => store)
    const renderCards = (type) => {

        const cardTypes = [
            {
                type: 'characters',
                component: selector.characters.characters.map((item,i) => (
                    <Card key={i} onClick={() => history(`/${type}/${item.id}`)}>
                        <CardImageContainer 
                           image={item.image}
                           content={item.name}
                        />
                    </Card>
                ))
            },
            {
                type: 'episodes',
                component: selector.episodes.episodes.map((item,i) => (
                    <Card key={i} onClick={() => history(`/${type}/${item.id}`)}>
                        <CardText content={item.name}/>
                    </Card>
                ))
            }
        ]

        const filterType = cardTypes.find((item) => item.type === type)
        return filterType.component

    } 

    return(
        <>
         <CardsContainerStyles>
             {
                renderCards(type)
             }
         </CardsContainerStyles>
        </>
    )
}

const CardsContainerStyles = styled.div`
    width:90%;
    margin: 70px auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 30px;
`