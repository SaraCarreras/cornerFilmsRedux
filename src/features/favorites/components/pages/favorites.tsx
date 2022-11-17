import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../infraestructure/store/store";
import { FavButton } from "../../../movies/components/button.fav/button.fav";
import styles from "./favorites.module.scss";

function Favorites() {
    const logo = "./error.svg";
    const IMAG_URL = "https://image.tmdb.org/t/p/w200/";

    const movies = useSelector(
        (state) => (state as RootState).login.favoritesArray
    );
    const isLogged = useSelector((state: RootState) => state.login.isLogged);

    if (isLogged && movies.length !== 0) {
        return (
            <React.Fragment>
                <h1 className={styles.favMovies}>Favorites Page</h1>
                <div className={styles.movies}>
                    {movies.map((movie) => {
                        return (
                            <section className={styles.container}>
                                <div className={styles.serie}>
                                    <img
                                        src={IMAG_URL + movie.poster_path}
                                        alt="{movie.title}"
                                    ></img>
                                    <div className={styles.description}>
                                        <p>
                                            <b>{movie.title}</b>
                                        </p>
                                        <p>{movie.overview}</p>
                                    </div>

                                    <FavButton
                                        key={movie.id}
                                        movie={movie}
                                    ></FavButton>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    } else if (isLogged && movies.length === 0) {
        return (
            <h1 className={styles.errorMessages}>
                You don't have favorites movies, yet.
            </h1>
        );
    } else if (!isLogged) {
        return (
            <div className={styles.errorContainer}>
                <h1 className={styles.errorMessages}>
                    Sorry, you need to be logged in!
                </h1>
                <img src={logo} className={styles.logo} alt="logo" />
            </div>
        );
    } else {
        return (
            <h1 className={styles.errorMessages}>Sorry, we had an error :( </h1>
        );
    }
}

export default Favorites;
