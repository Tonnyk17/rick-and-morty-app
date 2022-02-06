import React from "react";
import styled from "styled-components";
import { colors } from "./Variables/color";

export const Button = ({content,onClick}) => {
    return(
        <>
            <ButtonStyles onClick={onClick}>{content}</ButtonStyles>
        </>
    )
}

const ButtonStyles = styled.button`
    width: 100px;
    height: 30px;
    background-color: ${colors.blueSpace};
    border-radius: 5px;
    color:${colors.main};
    border: 1px solid ${colors.main};
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`