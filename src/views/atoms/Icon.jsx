import React from "react";
import styled, {keyframes} from "styled-components";

export const Icon = ({image,onClick}) => {
    return(
        <>
            <IconStyles 
                src={image} 
                onClick={onClick}
            />
        </>
    )
}

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  50% {
    transform: rotateZ(-15deg) ;
  }
  100%{
    transform: rotateZ(0deg);
  }
`;

const IconStyles = styled.img`
    width: 60px;
    animation: ${rotate} 1s infinite;
    @media screen and (min-width: 700px){
        width: 90px;
    }
`;