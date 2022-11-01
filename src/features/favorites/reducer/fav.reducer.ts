import { createReducer } from "@reduxjs/toolkit";
import { iUser } from "../interfaces/ifavorites";
import { actionTypes } from "../reducer/fav.action.types";

//type actionFavs = Array<iFavorite> | iFavorite;
export interface iFav<T> {
    type: actionTypes;
    payload: T;
}

const initialState: Array<iUser> = [];

export const favoritesReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(actionTypes["favorites@load"], (state, action) => {
            return (action as iFav<Array<iUser>>).payload;
        })
        .addCase(actionTypes["favorites@add"], (state, action) => {
            return [...state, (action as iFav<iUser>).payload];
        })

        .addCase(actionTypes["favorites@delete"], (state, action) => {
            return state.filter(
                (item) => item !== (action as iFav<iUser>).payload
            );
        })
        .addDefaultCase((state) => state);
});
