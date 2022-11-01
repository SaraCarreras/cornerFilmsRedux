import { iMovie } from "../../movies/interfaces/imovie";

export interface iUser {
    name: string;
    email: string;
    isLogged: boolean;
    photoURL: string;
    favoritesArray: Array<iMovie>;
}

export type basicT = { id: number | string };

export type basicResponse = { ok: boolean };

export interface Repository<T extends basicT, basicResponse> {
    getAllFavorites: () => Promise<Array<T>>;
    getItem: (id: T["id"]) => Promise<T>;
    addFavorite: (item: T) => Promise<T>;
    updateComment: (item: Partial<T>) => Promise<T>;
    deleteFavorite: (id: T["id"]) => Promise<basicResponse>;
}
