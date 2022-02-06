import axios from "axios";
import { EPISODES_QUERY, EPISODE_QUERY } from "./queries";

//const
const initialState = {
    episodes: []
}
const GET_EPISODES = 'GET_EPISODES';
const GET_EPISODE = 'GET_EPISODE';
const SEARCH_EPISODE = 'SEARCH_EPISODE';
const GET_NEXT_PAGE = 'GET_NEXT_PAGE';
const GET_PREV_PAGE = 'GET_PREV_PAGE';


//reducer
export const episodeReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EPISODES: 
            return {
                ...state,
                episodes: action.payload.results,
                episodePage : action.payload.info
            }
        case GET_EPISODE: 
            return {
                ...state,
                episode: action.payload
            }
        case SEARCH_EPISODE: 
            return {
                ...state,
                episodes: action.payload.results,
                episodePage : action.payload.info
            }
        case GET_NEXT_PAGE:
            return {
                ...state,
                episodes: action.payload.results,
                episodePage : action.payload.info
            }
        case GET_PREV_PAGE:
            return {
                ...state,
                episodes: action.payload.results,
                episodePage : action.payload.info
             }
        default: 
            return state
    }
}

//actions

export const getEpisode = () => async(dispatch, getState) => {
    try {
        const response = await axios.post('https://rickandmortyapi.com/graphql/',{
            query: `query episodes{
                episodes
                ${EPISODES_QUERY}
              }`
        });

        dispatch({
            type: 'GET_EPISODES',
            payload: response.data.data.episodes
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const getEpisodeById = (payload) => async(dispatch, getState) => {
    try {
        const response = await axios.post('https://rickandmortyapi.com/graphql/',{
            query: `query episode{
                episode(id:${payload})
                ${EPISODE_QUERY}
              }`
        });
        dispatch({
            type: 'GET_EPISODE',
            payload: response.data.data.episode
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const searchEpisode= (payload) => async(dispatch, getState) => {
    try {
        const response = await axios.post('https://rickandmortyapi.com/graphql/',{
            query: `query episodes{
                episodes(filter: { name: "${payload}" })
                ${EPISODES_QUERY}
              }`
        });
        dispatch({
            type: 'SEARCH_EPISODE',
            payload: response.data.data.episodes
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const getEpisodeNextPage = (payload) => async(dispatch, getState) => {
    try {
        const response = await axios.post('https://rickandmortyapi.com/graphql/',{
            query: `query episodes{
                episodes(page:${payload})
                ${EPISODES_QUERY}
              }`
        });
        dispatch({
            type: 'GET_NEXT_PAGE',
            payload: response.data.data.episodes
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const getEpisodePrevPage = (payload) => async(dispatch, getState) => {
    try {
        const response = await axios.post('https://rickandmortyapi.com/graphql/',{
            query: `query episodes{
                episodes(page:${payload})
                ${EPISODES_QUERY}
              }`
        });
        dispatch({
            type: 'GET_PREV_PAGE',
            payload: response.data.data.episodes
        })
        
    } catch (error) {
        console.log(error)
    }
}
