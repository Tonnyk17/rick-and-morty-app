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
    font-weight: 500;
    font-size: 20px;
    color: ${colors.cyan};
`