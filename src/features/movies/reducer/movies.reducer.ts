import { createReducer } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import {
    popularMoviesActionCreators,
    searchedMoviesActionCreators,
} from "./movies.action.creators";

const initialState: Array<iMovie> = [];

export const moviesReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(
            popularMoviesActionCreators.getPopularMovie,
            (state, action) => {
                return action.payload;
            }
        )
        .addDefaultCase((state) => state);
});
