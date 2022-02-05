import React from "react";
import styled from "styled-components";

export const CardImage = ({image, isButton}) => {
    return(
        <>
            <CardImageStyle src={image} isButton={isButton}/>
        </>
    )
}

const CardImageStyle = styled.img`
    width:100%;
    border-radius: 15px;
    position:${props => props.isButton ? 'absolute' : 'initial'};
    &:hover{
        opacity:${props => props.isButton ? 0.2 : 1};
    }
`