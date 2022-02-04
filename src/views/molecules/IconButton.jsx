import React from "react";
import styled from "styled-components";
import { Icon } from "../atoms/Icon";
import { IconText } from "../atoms/Text/IconText";

export const IconButton = ({image, content, onClick}) => {
    return(
        <>
            <IconButtonStyles>
                <Icon image={image}/>
                <IconText 
                    content={content} 
                    onClick={onClick}
                />
            </IconButtonStyles>
        </>
    )
}

const IconButtonStyles = styled.div`
    width: 120px;
    display: grid;
    justify-items: center;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`;