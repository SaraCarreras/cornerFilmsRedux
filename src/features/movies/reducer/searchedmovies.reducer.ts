import { createReducer } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import { searchedMoviesActionCreators } from "./movies.action.creators";

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
        )
        .addCase(
            searchedMoviesActionCreators.deleteSearchedMovie,
            (state, action) => {
                return initialState;
            }
        )
        .addDefaultCase((state) => state);
});
