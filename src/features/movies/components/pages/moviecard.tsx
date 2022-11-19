import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../infraestructure/store/store";
import { FavButton } from "../button.fav/button.fav";
import { moviesActionCreators } from "../../reducer/movies.action.creators";
import React from "react";
import styles from "./moviecard.module.scss";
import { Link, useSearchParams } from "react-router-dom";

/*
    https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&04d110606a25e52db02f63a7d1e1d707
    
    //para info de una peli
    https://api.themoviedb.org/3/movie/550?api_key=04d110606a25e52db02f63a7d1e1d707
    
    //pelis populares
    https://api.themoviedb.org/3/movie/popular?api_key=04d110606a25e52db02f63a7d1e1d707&language=es&page=1

    //trending
    https://api.themoviedb.org/3/trending/movie/week?api_key=04d110606a25e52db02f63a7d1e1d707

    //poster path es a partir último / entrando en pelis popus x ej
    https://image.tmdb.org/t/p/w200/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg
    */

const API_KEY = "api_key=04d110606a25e52db02f63a7d1e1d707";
const BASEAPI_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "&language=es&";
const POPULAR_PAGE = "page=1";
const IMAG_URL = "https://image.tmdb.org/t/p/w200/";

// https://api.themoviedb.org/3/search/movie?api_key=04d110606a25e52db02f63a7d1e1d707&query=Harry+Potter

const POPULAR_MOVIES =
    BASEAPI_URL + "/movie/popular?" + API_KEY + LANGUAGE + POPULAR_PAGE;

function MovieCard() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => (state as RootState).movies);

    useEffect(() => {
        fetch(POPULAR_MOVIES)
            .then((resp) => resp.json())
            .then((data) => {
                dispatch(moviesActionCreators.get(data.results));
                // console.log(data.results);
            });
    }, [dispatch]);
    // console.log(movies);

    return (
        <>
            {movies.map((movie) => {
                return (
                    <ul key={movie.id}>
                        <section className={styles.container}>
                            <div className={styles.serie}>
                                {/* <Link
                                    to={`/favorites/${movie.id}`}
                                    target="link to full movie"
                                ></Link> */}
                                <Link to={`/movies/${movie.id}`}>
                                    <img
                                        src={IMAG_URL + movie.poster_path}
                                        alt={movie.title}
                                    />
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
                    </ul>
                );
            })}
        </>
    );
}
export default MovieCard;
