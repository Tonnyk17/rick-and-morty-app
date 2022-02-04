import React from "react";
import styled from "styled-components";
import { colors } from "../Variables/color";

export const IconText = ({content}) => {
    return(
        <>
            <IconTextStyles>{content}</IconTextStyles>
        </>
    )
};

const IconTextStyles = styled.h3`
    font-size: 28px;
    text-align: center;
    font-family: 'Patrick Hand SC', cursive;
    color: ${colors.main};
    text-shadow: 0px 0px 15px ${colors.green};
    margin: 8px;
`;