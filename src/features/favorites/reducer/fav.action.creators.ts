import { createAction } from "@reduxjs/toolkit";
import { iUser } from "../interfaces/ifavorites";
import { actionTypes } from "../reducer/fav.action.types";

export const favoriteActionCreator = {
    load: createAction<Array<iUser>>(actionTypes["favorites@load"]),
    add: createAction<iUser>(actionTypes["favorites@add"]),
    delete: createAction<iUser>(actionTypes["favorites@delete"]),
    get: createAction<iUser>(actionTypes["favorites@get"]),
};
