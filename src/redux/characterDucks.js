import axios from "axios";
import { initialState } from "./initialState";
import { CHARACTERS_QUERY } from "./queries";

//const

const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTER = 'GET_CHARACTER';
const GET_NEXT_PAGE = 'GET_NEXT_PAGE';
const iniciar = {
    characters:[]
}

//reducer
export const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS: 
            return {
                ...state,
                characters: action.payload.results,
                characterPage : action.payload.info
            }
        default: 
            return state
    }
}

//actions

export const getCharacter = () => async(dispatch, getState) => {
    try {
        const response = await axios.post('https://rickandmortyapi.com/graphql/',{
            query: `query characters{
                ${CHARACTERS_QUERY}
              }`
        });

        dispatch({
            type: 'GET_CHARACTERS',
            payload: response.data.data.characters
        })
        
    } catch (error) {
        console.log(error)
    }
}