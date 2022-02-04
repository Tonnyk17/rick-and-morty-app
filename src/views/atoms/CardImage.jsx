import React from "react";
import styled from "styled-components";

export const CardImage = ({image}) => {
    return(
        <>
            <CardImageStyle src={image}/>
        </>
    )
}

const CardImageStyle = styled.img`
    width:100%;
    border-radius: 15px;
    position:absolute;
    &:hover{
        opacity:0.2;
    }
`