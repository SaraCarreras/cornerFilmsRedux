import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../infraestructure/store/store";
import { FavButton } from "../../../movies/components/button.fav/button.fav";
import styles from "./favorites.module.scss";

function Favorites() {
    const notLogged = "./error.svg";
    const IMAG_URL = "https://image.tmdb.org/t/p/w200/";

    const movies = useSelector(
        (state) => (state as RootState).login.favoritesArray
    );
    const isLogged = useSelector((state: RootState) => state.login.isLogged);
    const noFav = "./searchnotfound.gif";
    const errorPage = "./404.gif";

    if (isLogged && movies.length !== 0) {
        return (
            <React.Fragment>
                <h1 className={styles.favMovies}>Favorites Page</h1>
                <div className={styles.movies}>
                    {movies.map((movie) => {
                        return (
                            <section className={styles.container}>
                                <div className={styles.serie}>
                                    <Link to={`/movies/${movie.id}`}>
                                        <img
                                            src={IMAG_URL + movie.poster_path}
                                            alt={movie.title}
                                        ></img>
                                    </Link>

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
            <div className={styles.errorContainer}>
                <h1>You don't have favorites movies, yet.</h1>
                <div className={styles.imgContainer}>
                    <img src={noFav} alt="logo error no favorites" />
                </div>
            </div>
        );
    } else if (!isLogged) {
        return (
            <div className={styles.errorContainer}>
                <h1>Sorry, you need to be logged in!</h1>
                <div className={styles.imgContainer}>
                    <img src={notLogged} alt="logo error not logged" />
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.errorContainer}>
                <h1>Sorry, we had an error </h1>
                <div className={styles.imgContainer}>
                    <img src={errorPage} alt="logo error page" />
                </div>
            </div>
        );
    }
}

export default Favorites;
