import React from "react";
import styled from "styled-components";
import { colors } from "../Variables/color";

export const InfoText = ({content}) => {
    return(
        <>
            <InfoTextStyle>{content}</InfoTextStyle>
        </>
    )
}

const InfoTextStyle = styled.p`
    font-size: 20px;
    color: ${colors.cyan};
`;