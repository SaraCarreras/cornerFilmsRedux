import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./moviedetails.module.scss";
import { iMovie, iParam } from "../../interfaces/imovie";
import { RootState } from "../../../../infraestructure/store/store";
import React, { useEffect, useState } from "react";

function MovieDetails() {
    const imageURL = "https://image.tmdb.org/t/p/w500/";
    const [movie, setMovie] = useState<iMovie>({
        title: "",
        id: 0,
        poster_path: "",
        overview: "",
        vote_average: 0,
        release_date: ",",
    });

    //tendré cambiar esto y hacer 1 llamada con el search, sin cogerlo de mi store
    // const popularMoviesStored = useSelector(
    //     (state) => (state as RootState).popularMovies.popularMovies
    // );
    // const searchedMoviesStored = useSelector(
    //     (state) => (state as RootState).searchedMovies.searchedMovies
    // );

    const { movieId } = useParams<keyof iParam>() as iParam;
    console.log(movieId);
    const API_KEY = "api_key=04d110606a25e52db02f63a7d1e1d707";
    const BASEAPI_URL = "https://api.themoviedb.org/3";
    const LANGUAGE = "&language=en";
    const URL_BY_ID = BASEAPI_URL + `/movie/${movieId}?` + API_KEY + LANGUAGE;

    useEffect(() => {
        if (movieId) {
            fetch(URL_BY_ID)
                .then((resp) => resp.json())
                .then((data) => {
                    setMovie(data);
                    console.log(data);
                });
        }
    }, [movieId]);
    console.log(movie);

    // const moviesFiletered = (
    //     searchedMoviesStored.length !== 0
    //         ? searchedMoviesStored
    //         : popularMoviesStored
    // ).filter((movie) => movie.id.toString() === movieId);
    //console.log(moviesFiletered);

    // if(isLoading){
    //     return <Spinner />;
    // }
    return movie ? (
        <>
            <React.Fragment key={movie.title}>
                <div className={styles.detailsContainer}>
                    {movie.poster_path ? (
                        <img
                            className={styles.col}
                            src={imageURL + movie.poster_path}
                            alt={movie.title}
                        />
                    ) : (
                        <div className={styles.errorImage}>
                            <h1>🔻Sorry, we don't have the poster image😱</h1>
                        </div>
                    )}

                    <div className={styles.col}>
                        <p>
                            <strong>Description: </strong>
                            {movie.overview}
                        </p>

                        <p>
                            <strong key={movie.id + 8}>Title: </strong>{" "}
                            {movie.title}
                        </p>

                        <p>
                            <strong>Release date: </strong>
                            {movie.release_date}
                        </p>
                    </div>
                </div>
            </React.Fragment>
        </>
    ) : (
        <h1>"We didn't find the Movie."</h1>
    );
}
export default MovieDetails;
