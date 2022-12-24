import { createAction } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import { actionTypes } from "./movies.action.types";

export const popularMoviesActionCreators = {
    getPopularMovie: createAction<Array<iMovie>>(
        actionTypes["movies@getPopularMovie"]
    ),
};

export const searchedMoviesActionCreators = {
    getSearchedMovie: createAction<Array<iMovie>>(
        actionTypes["movies@getSearchedMovie"]
    ),
};
