import React from 'react';
import styled from 'styled-components';
import { colors } from '../Variables/color';

export const Title = ({content}) => {
    return(
        <>
            <TitleStyles>{content}</TitleStyles>
        </>
    )
}

const TitleStyles = styled.h1`
    text-shadow: 0px 0px 15px ${colors.green};
    font-size: 54px;
    color: ${colors.main};
    text-align: center;
    font-family: 'Patrick Hand SC', cursive;
`;