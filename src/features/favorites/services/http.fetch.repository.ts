/*
URL POSTMAN para postear dentro de mi user Google diferentes pelis:
https://cinefin-e3428-default-rtdb.europe-west1.firebasedatabase.app/favorites/rI0NzQOeSYN9BEsJi6nPgGmcbMn2/peli3.json

URL POSTMAN 1º hice 1 post con loq ue se ay ahor ahe hecho patch con el preloades state:
https://cinefin-e3428-default-rtdb.europe-west1.firebasedatabase.app/favorites/rI0NzQOeSYN9BEsJi6nPgGmcbMn2.json



*/

//añado la prop addComment al objeto:
// let favorites = [
//     {
//         a: 1,
//         name: "lulut",
//         id: "plant",
//     },
//     {
//         a: 2,
//         name: "charmander",
//         id: "fire",
//     },
// ];

// let modified = { ...favorites };

// const updateFav = favorites.map((item) => {
//     return { ...item, addComment: "" };
// });

// console.log(updateFav);
// console.log(modified);

import { iMovie } from "../../movies/interfaces/imovie";
import { basicT, basicResponse, iUser } from "../interfaces/ifavorites";
//  function getAllFavorites(): Promise<Array<iFavorite>>;

export async function getAllFavorites(): Promise<Array<basicT>> {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/favorites/rI0NzQOeSYN9BEsJi6nPgGmcbMn2.json`
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch favorites movies.");
    }
    const extractedFavArray: Array<basicT> = [];
    // ARREGLAR ESTO CON LO DE API.JS Y IR TIRANDO CON ANY MIENTRAS FUNCIONE, HACER YA UN EL COD DEL BOTÓN PARA HCAER PRIMER PATCH!
    for (const key in data) {
        const quoteObj = {
            id: key,
            ...data[key],
        };
        extractedFavArray.push(quoteObj);
    }

    console.log(extractedFavArray);

    return extractedFavArray;
}

export async function getFavorite(id: basicT["id"]): Promise<basicT> {
    const GETMOVIE_BYID = `https://api.themoviedb.org/3/movie/'${id}?api_key=04d110606a25e52db02f63a7d1e1d707&language=en-US`;
    const response = await fetch(GETMOVIE_BYID);
    const data = await response.json().then((data) => {
        if (!data || data.id === id) return data;
        return { ...data, id };
    });
    return { ...data, id };
}

// export async function addFavorite(
//     userId: string,
//     favoritesArray: Partial<iUser>
// ): Promise<basicT> {
//     return fetch(`${process.env.REACT_APP_API_URL}/favorites/${userId}.json`, {
//         method: "PATCH",
//         body: JSON.stringify(userId),
//         headers: { "Content-Type": "application/json" },
//     }).then((resp) => resp.json());
// }

export function deleteFavorite(id: number | string): Promise<basicResponse> {
    return fetch(
        `${process.env.REACT_APP_API_URL}/favorites/rI0NzQOeSYN9BEsJi6nPgGmcbMn2/${id}.json`,
        { method: "DELETE" }
    );
}

export async function addFavorite(
    userId: string,
    favoritesArray: Partial<iUser>
): Promise<iUser> {
    return fetch(`${process.env.REACT_APP_API_URL}/favorites/${userId}.json`, {
        method: "PATCH",
        body: JSON.stringify(favoritesArray),
        headers: { "Content-Type": "application/json" },
    }).then((resp) => resp.json());
}

export function updateComment(
    id: number | string,
    favorites: Array<iMovie>
): Promise<Array<iMovie>> {
    const updateFav = favorites.map((item) => {
        return { ...item, addComment: "" };
    });

    return fetch(
        `${process.env.REACT_APP_API_URL}/favorites/rI0NzQOeSYN9BEsJi6nPgGmcbMn2/${id}.json`,
        {
            method: "PATCH",
            body: JSON.stringify(updateFav),
            headers: { "Content-Type": "application/json" },
        }
    ).then((res) => res.json());
}
