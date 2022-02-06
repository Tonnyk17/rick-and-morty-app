import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCharacterNextPage, getCharacterPrevPage } from "../../redux/characterDucks";
import { getEpisodeNextPage, getEpisodePrevPage } from "../../redux/episodeDucks";
import { Button } from "../atoms/Button";

export const ButtonsContainer = ({type}) => {
    const dispatch = useDispatch()
    const selector = useSelector(store => store)


    const handleNext = () => {
        if(type === 'characters'){
            if(selector.characters.characterPage.prev > selector.characters.characterPage.pages){
                dispatch(getCharacterNextPage(1))
            }
            else{
                dispatch(getCharacterNextPage(selector.characters.characterPage.next))
            }
        }
        else if(type === 'episodes'){
            if(selector.episodes.episodePage.prev > selector.episodes.episodePage.pages){
                dispatch(getEpisodeNextPage(1))
            }
            else{
                dispatch(getEpisodeNextPage(selector.episodes.episodePage.next))
            }
        }
    }

    const handlePrev = () => {
        if(type === 'characters'){
            if(selector.characters.characterPage.prev < 1){
                dispatch(getCharacterPrevPage(selector.characters.characterPage.pages))
            }
            else{
                dispatch(getCharacterPrevPage(selector.characters.characterPage.prev))
            }
        }
        else if(type === 'episodes'){
            if(selector.episodes.episodePage.prev < 1){
                dispatch(getEpisodePrevPage(selector.episodes.episodePage.pages))
            }
            else{
                dispatch(getEpisodePrevPage(selector.episodes.episodePage.prev))
            }
        }
        
    }
    return(
        <>
            <ButtonsContainerStyles>
                <Button content={'Prev'} onClick={handlePrev}/>
                <Button content={'Next'} onClick={handleNext}/>
            </ButtonsContainerStyles>
        </>
    )
}

const ButtonsContainerStyles = styled.div`
width: 80%;
margin: 30px auto;
display: flex;
justify-content: space-between;
`