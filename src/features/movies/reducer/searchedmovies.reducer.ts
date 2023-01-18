import { createReducer } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import { searchedMoviesActionCreators } from "./movies.action.creators";
import { actionTypes } from "./movies.action.types";

const initialState: { searchedMovies: Array<iMovie> } = {
    searchedMovies: [],
};

export const searchedMoviesReducer = createReducer(initialState, (builder) => {
    return builder

        .addCase(
            searchedMoviesActionCreators.getSearchedMovie,
            (state, action) => {
                return {
                    ...state,
                    searchedMovies: [
                        ...state.searchedMovies,
                        ...action.payload,
                    ],
                };
            }

            // return [...state, ...action.payload];
        )
        .addCase(
            searchedMoviesActionCreators.deleteSearchedMovie,
            (state, action) => {
                return initialState;
            }
        )
        .addDefaultCase((state) => state);
});
