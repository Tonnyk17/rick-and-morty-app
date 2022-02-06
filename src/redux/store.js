import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { characterReducer } from "./characterDucks";

const reducers = combineReducers({
    characters: characterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const generateStore = () => {
    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}

