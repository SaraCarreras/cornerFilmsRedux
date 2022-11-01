import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../infraestructure/store/store";
import { FavButton } from "../../../movies/components/button.fav/button.fav";
import favorites from "./favorites.module.scss";

function Favorites() {
    const IMAG_URL = "https://image.tmdb.org/t/p/w200/";

    const movies = useSelector(
        (state) => (state as RootState).login.favoritesArray
    );
    const isLogged = useSelector((state: RootState) => state.login.isLogged);

    if (isLogged && movies.length !== 0) {
        return (
            <React.Fragment>
                <h1 className={favorites.favMovies}>Favorites Page</h1>
                <div className={favorites.movies}>
                    {movies.map((movie) => {
                        return (
                            <section className={favorites.container}>
                                <div className={favorites.serie}>
                                    <img
                                        src={IMAG_URL + movie.poster_path}
                                        alt="{movie.title}"
                                    ></img>
                                    <div className={favorites.description}>
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
        return <h1>You don't have favorites movies, yet.</h1>;
    } else if (!isLogged) {
        return <h1>Sorry, you need to be logged in!</h1>;
    } else {
        return <h1>Sorry, we had an error :( </h1>;
    }
}

export default Favorites;
