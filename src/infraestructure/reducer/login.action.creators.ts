import { createAction } from "@reduxjs/toolkit";
import { iMovie } from "../../features/movies/interfaces/imovie";
import { actionTypes } from "./login.action.types";

export const loginActionsCreators = {
    login: createAction<{
        // payloads
        uid: string | null;
        name: string | null;
        email: string | null;
        isLogged: boolean | null;
        photoURL: string | null;
        favoritesArray: Array<iMovie> | null;
    }>(actionTypes["logger@login"]),
    logout: createAction<void>(actionTypes["logger@logout"]),
};
