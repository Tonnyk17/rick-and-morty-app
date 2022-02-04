import React from "react";
import styled from "styled-components";
import { colors } from "../Variables/color";

export const Subtitle = ({content}) => {
    return(
    <>
        <SubtitleStyles>{content}</SubtitleStyles>
    </>
    )
}

const SubtitleStyles = styled.h2`
    color: ${colors.cyan};
    font-size: 32px;
    text-align: center;
    font-family: 'Patrick Hand SC', cursive;
`;