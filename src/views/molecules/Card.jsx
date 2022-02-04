import React from "react";
import styled from "styled-components";
import { colors } from "../atoms/Variables/color";

export const Card = ({children, onClick, onMouseEnter}) => {
    return(
        <>
            <CardStyles onClick={onClick} onMouseEnter={onMouseEnter}>
                {children}
            </CardStyles>
        </>
    )
}

const CardStyles = styled.div`
    width: 200px;
    margin: 0 auto;
    height: 200px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 15px ${colors.cyan};
    background-color: ${colors.blueSpace};
    color: ${colors.main};
    cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 15px ${colors.green};
        background-color: ${colors.green50};
      
    }
`