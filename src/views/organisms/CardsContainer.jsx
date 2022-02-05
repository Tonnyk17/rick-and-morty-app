import React from "react";
import styled from "styled-components";
import { Card } from "../molecules/Card";
import { CardImageContainer } from "../molecules/CardImageContainer";

export const CardsContainer = () => {
    const cards = [
        {
        item:1,
        },
        {
            item:2
        },
        {
            item:2
        },
        {
            item:2
        },{
            item:2
        },{
            item:2
        },{
            item:2
        },{
            item:2
        },
    ];
    return(
        <>
         <CardsContainerStyles>
             {
                 cards.map(item => (
                     <Card>
                         <CardImageContainer />
                     </Card>
                 ))
             }
         </CardsContainerStyles>
        </>
    )
}

const CardsContainerStyles = styled.div`
    width:90%;
    margin: 30px auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 30px;
`