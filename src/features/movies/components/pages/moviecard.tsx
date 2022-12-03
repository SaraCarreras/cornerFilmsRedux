import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../infraestructure/store/store";
import { FavButton } from "../button.fav/button.fav";
import { moviesActionCreators } from "../../reducer/movies.action.creators";
import React from "react";
import styles from "./moviecard.module.scss";
import { Link } from "react-router-dom";
import { NoResults } from "../../../../infraestructure/components/noResults/noResults";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../../../../infraestructure/components/spinner/spinner";

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
const LANGUAGE = "&language=en";

const IMAG_URL = "https://image.tmdb.org/t/p/w200/";

function MovieCard({ search }: { search: string }) {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const noImage = "./camera.svg";
    const dispatch = useDispatch();
    const movies = useSelector((state) => (state as RootState).movies);

    //URLs API
    const POPULAR_PAGE = `&page=${page}`;
    const POPULAR_MOVIES =
        BASEAPI_URL + "/movie/popular?" + API_KEY + LANGUAGE + POPULAR_PAGE;
    const urlToSearch =
        `${BASEAPI_URL}/search/movie?${API_KEY}&query=${search}` + POPULAR_PAGE;

    useEffect(() => {
        setIsLoading(true);
        const searchURL = search ? urlToSearch : POPULAR_MOVIES;
        fetch(searchURL)
            .then((resp) => resp.json())
            .then((data) => {
                dispatch(moviesActionCreators.get(movies.concat(data.results)));
                setHasMore(data.page < data.total_pages);
                setIsLoading(false);
                console.log(data.results);
            });
    }, [dispatch, search, urlToSearch]);
    // console.log(movies);

    //  <Spinner />
    //cuando esté el isLoading, debo hacer el if con -> !isLoading && movies.length === 0 ?

    return !isLoading && movies.length === 0 ? (
        <NoResults />
    ) : (
        <InfiniteScroll
            key={"InfiniteScroll"}
            className={styles.scroller}
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <>
                <h1>Popular Movies</h1>
                {movies.map((movie, i) => {
                    return (
                        <ul key={i}>
                            <section className={styles.container}>
                                <div className={styles.serie}>
                                    {/* <Link
                                    to={`/favorites/${movie.id}`}
                                    target="link to full movie"
                                ></Link> */}
                                    <Link to={`/movies/${movie.id}`}>
                                        <img
                                            src={
                                                movie.poster_path
                                                    ? IMAG_URL +
                                                      movie.poster_path
                                                    : noImage
                                            }
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
        </InfiniteScroll>
    );
}
export default MovieCard;
