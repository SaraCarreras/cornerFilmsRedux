import { createReducer } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import { popularMoviesActionCreators } from "./movies.action.creators";

const initialState: { popularMovies: Array<iMovie> } = {
    popularMovies: [],
};

export const moviesReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(
            popularMoviesActionCreators.getPopularMovie,
            (state, action) => {
                return {
                    ...state,
                    popularMovies: [...state.popularMovies, ...action.payload],
                };
            }
        )
        .addCase(
            popularMoviesActionCreators.deletePopularMovie,
            (state, action) => {
                return initialState;
            }
        )
        .addDefaultCase((state) => state);
});
