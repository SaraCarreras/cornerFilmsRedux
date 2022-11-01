export {};

/*
EJEMPLOS CADA UNA DE LAS 3 ACCIONES DEL FAVORITES BUTTON
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../infraestructure/store/store";

import { iFavorite } from "../interfaces/ifavorites";
//import * as api from "../services/http-notes";
import * as act from "../reducer/fav.action.creators";
import { useCallback, useEffect } from "react";

export function useFavorites() {
    const favorites = useSelector((state: RootState) => {
        return state.favorites;
    });
    const dispatch = useDispatch();

    const loadFavorites = useCallback(() => {
        api.getAllFavorites().then((data) => {
            dispatch(act.loadFavoritesCreatorAction(data));
        });
    }, [dispatch]);

    const Favorite = (newFavorite: iFavorite) => {
        api.addFavorite(newFavorite).then((data) => {
            dispatch(act.addFavoriteCreatorAction(data));
        });
    };

    const deleteFavorite = (favorite: iFavorite) => {
        api.deleteFavorite(favorite.id).then((resp) => {
            if (resp.ok) {
                dispatch(act.deleteFavoriteCreatorAction(favorite));
            }
        });
    };

    return {
        favorites,
        loadFavorites,
        addFavorite,
        deleteFavorite,
    };
}
*/
