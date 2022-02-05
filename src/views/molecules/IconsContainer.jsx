import React from "react";
import styled from "styled-components";
import { IconButton } from "./IconButton";
import { useNavigate } from "react-router-dom";
import home from '../../assets/home.png'
import characters from '../../assets/pickle-rick.png';
import episodes from '../../assets/cover.jpg';

export const IconsContainer = ({infoType}) => {

    const history = useNavigate();
    const renderButton = (type) => {
        const buttonTypes = [
            {
                type: 'episodes',
                component: <IconButton 
                    content={'Characters'} 
                    image={characters}
                    onClick={() => history('/characters')}
                />
            },
            {
                type: 'characters',
                component: <IconButton 
                    content={'Episodes'} 
                    image={episodes}
                    onClick={() => history('/episodes')}
                />
            }
        ]

        const filterType = buttonTypes.find((item) => item.type === type)
        return filterType.component
    }
    return(
        <>
            <IconsContainerStyle>
            <IconButton 
                content={'Home'} 
                image={home}
                onClick={() => history('/')}
            />
            {
                renderButton(infoType)
            }
            </IconsContainerStyle>
        </>
    )
}

const IconsContainerStyle = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top:20px;
    display: flex;
    justify-content: space-between;
`