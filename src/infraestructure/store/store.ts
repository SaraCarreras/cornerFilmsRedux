import { configureStore } from "@reduxjs/toolkit";

import { moviesReducer } from "../../features/movies/reducer/movies.reducer";
import { loginReducer } from "../reducer/login.reducer";
//import { iNote } from "../../features/notes/models/note";
//import { notesReducer,notesReducer,notesReducer2,} from "../../features/notes/reducer/notes.reducer";

export const store = configureStore({
    preloadedState: {
        login: {
            uid: "",
            name: "",
            email: "",
            isLogged: false,
            photoURL: "",
            favoritesArray: [],
        },
        popularMovies: [],
        searchedMovies: [],
    },
    //saca el state del conjunto de los reducers(fav.reducer)
    reducer: {
        login: loginReducer,
        popularMovies: moviesReducer,
        searchedMovies: moviesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
