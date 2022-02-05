import React from "react";
import styled from "styled-components";
import { CardImage } from "../atoms/CardImage";
import { CardText } from "../atoms/Text/CardText";

export const CardImageContainer = ({image, content}) => {

    return(
        <>
           <CardImageContainerStyle>
               <CardImage image={image} isButton={true}/> 
               <CardText content={content}/>
           </CardImageContainerStyle>
        </>
    )
}

const CardImageContainerStyle = styled.div`
    width: 100%;
    height: 100%;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`