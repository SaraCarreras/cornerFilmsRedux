import { createAction } from "@reduxjs/toolkit";
import { iMovie } from "../interfaces/imovie";
import { actionTypes } from "./movies.action.types";

export const moviesActionCreators = {
    get: createAction<Array<iMovie>>(actionTypes["movies@get"]),
};
