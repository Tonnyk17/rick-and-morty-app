import React from "react";
import styled from "styled-components";
import { colors } from "../Variables/color";

export const CardText = ({content}) => {
    return(
        <>
            <CardTextStyle>{content}</CardTextStyle>
        </>
    )
}

const CardTextStyle = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    color: ${colors.cyan};
`