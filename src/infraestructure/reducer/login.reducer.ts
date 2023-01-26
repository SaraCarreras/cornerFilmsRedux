import { createReducer } from "@reduxjs/toolkit";
import { iMovie } from "../../features/movies/interfaces/imovie";
import { loginActionsCreators } from "./login.action.creators";

const initialState: {
    uid: string;
    name: string;
    email: string;
    isLogged: boolean;
    photoURL: string;
    favoritesArray: Array<iMovie>;
} = {
    uid: "",
    name: "",
    email: "",
    isLogged: false,
    photoURL: "",
    favoritesArray: [],
};

export const loginReducer = createReducer(initialState, (builder) => {
    return builder

        .addCase(loginActionsCreators.login, (state, action) => {
            return {
                uid: action.payload.uid ? action.payload.uid : "",
                name: action.payload.name ? action.payload.name : "",
                email: action.payload.email ? action.payload.email : "",
                isLogged: action.payload.isLogged
                    ? action.payload.isLogged
                    : false,
                photoURL: action.payload.photoURL
                    ? action.payload.photoURL
                    : "",
                favoritesArray: action.payload.favoritesArray
                    ? action.payload.favoritesArray
                    : [],
            };
        })
        .addCase(loginActionsCreators.logout, (state, action) => {
            return initialState;
        })

        .addDefaultCase((state) => state);
});

//SIMPLEST EXAMPLE OF A REDUCER:
// const counterReducer = (state ={counter:0}, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter +1
//         };
//     }

// if(action.type === 'decrement') {
//         return {
//             counter: state.counter -1
//         };
//     }

//     return state;
// }

// const store = redux.createStore(counteReducer);

// const counterSubscriber = () => {
//     const latestState = store.getState()
//     console.log(latestState);
// }

// store.subscribe(counterSubscriber)

// store.dispatch({type: 'increment'})
// store.dispatch({ type: "decrement" });
