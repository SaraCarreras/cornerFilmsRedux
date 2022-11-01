import { createReducer } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import { moviesActionCreators } from "./movies.action.creators";

const initialState: Array<iMovie> = [];

export const moviesReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(moviesActionCreators.get, (state, action) => {
            return action.payload;
        })
        .addDefaultCase((state) => state);
});
