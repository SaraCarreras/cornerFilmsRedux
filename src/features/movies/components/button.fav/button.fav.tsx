import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iMovie } from "../../interfaces/imovie";
import { RootState } from "../../../../infraestructure/store/store";
import { addFavorite } from "../../../favorites/services/http.fetch.repository";

import styles from "./buttonfav.module.scss";
import { loginActionsCreators } from "../../../../infraestructure/reducer/login.action.creators";

// const favoritesProvisional =
//     "https://api.themoviedb.org/3/person/23?api_key=04d110606a25e52db02f63a7d1e1d707&language=en-US";

export function FavButton({
    onClick,
    // idMovie: idMovie,
    movie,
}: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    // idMovie: number | string;
    movie: iMovie;
}) {
    const pathname = window.location.pathname;
    const isLogged = useSelector((state: RootState) => state.login.isLogged);
    const userLoggedInfo = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    let isMyfavorite = false;

    // {
    //     console.log(
    //         "userLoggedInfo " +
    //             JSON.stringify(userLoggedInfo.favoritesArray, null, 4)
    //     );
    // }
    if (Array.isArray(userLoggedInfo.favoritesArray)) {
        userLoggedInfo.favoritesArray.forEach((item) => {
            item.id === movie.id && (isMyfavorite = true);
        });
    }

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isLogged) return;
        const userUid = userLoggedInfo.uid;

        // console.log(
        //     "userLoggedInfo UID " + JSON.stringify(userLoggedInfo.uid, null, 4)
        // );
        // console.log(
        //     "userLoggedInfo FAVORITES ANTES " +
        //         JSON.stringify(userLoggedInfo.favoritesArray, null, 4)
        // );

        let newFavoritesArray: Array<iMovie> = [
            ...userLoggedInfo.favoritesArray,
        ];

        // console.log(
        //     "isMyfavorite ANTES ANTES " + JSON.stringify(isMyfavorite, null, 4)
        // );
        if (isMyfavorite) {
            newFavoritesArray = newFavoritesArray.filter(
                (item) => item.id !== movie.id
            );
        } else {
            newFavoritesArray.push(movie);
        }

        addFavorite(userUid, { favoritesArray: newFavoritesArray }).then(() => {
            const updateDataFromUser = {
                ...userLoggedInfo,
                favoritesArray: newFavoritesArray,
            };
            //actualize store:
            dispatch(loginActionsCreators.login(updateDataFromUser));
        });
    };

    return (
        <>
            {pathname === "/" ? (
                <button
                    className={isMyfavorite ? styles.btnactivated : styles.btn2}
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            ) : (
                <button
                    className={isMyfavorite ? styles.btnTrash : ""}
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            )}
        </>
    );
}
