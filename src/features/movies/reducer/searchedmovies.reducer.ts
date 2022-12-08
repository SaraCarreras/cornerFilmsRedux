import { createReducer } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import { searchedMoviesActionCreators } from "./movies.action.creators";

const initialState: Array<iMovie> = [];

export const searchedMoviesReducer = createReducer(initialState, (builder) => {
    return builder

        .addCase(
            searchedMoviesActionCreators.getSearchedMovie,
            (state, action) => {
                return action.payload;
            }
        )
        .addDefaultCase((state) => state);
});
