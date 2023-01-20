import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../infraestructure/store/store";
import { FavButton } from "../button.fav/button.fav";
import {
    popularMoviesActionCreators,
    searchedMoviesActionCreators,
} from "../../reducer/movies.action.creators";
import styles from "./moviecard.module.scss";
import { Link } from "react-router-dom";
import { NoResults } from "../../../../infraestructure/components/noResults/noResults";

/*
    https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&04d110606a25e52db02f63a7d1e1d707
    
    //para info de UNA peli
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
    const noImage = "./camera.svg";
    const dispatch = useDispatch();
    const popularMoviesStored = useSelector(
        (state) => (state as RootState).popularMovies.popularMovies
    );
    const searchedMoviesStored = useSelector(
        (state) => (state as RootState).searchedMovies.searchedMovies
    );

    const [hasMore, setHasMore] = useState(true);

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    //URLs API
    const POPULAR_PAGE = `&page=${page}`;
    const URL_TO_SEARCH =
        `${BASEAPI_URL}/search/movie?${API_KEY}&query=${search}` + POPULAR_PAGE;
    const POPULAR_MOVIES =
        BASEAPI_URL + "/movie/popular?" + API_KEY + LANGUAGE + POPULAR_PAGE;

    useEffect(() => {
        console.log(`StricMode Disabled ${search}`);

        if (search !== "") {
            setIsLoading(true);
            fetch(URL_TO_SEARCH)
                .then((resp) => resp.json())
                .then((data) => {
                    dispatch(
                        searchedMoviesActionCreators.getSearchedMovie(
                            data.results
                        )
                    );

                    setIsLoading(false);
                    setPage(page + 1);

                    console.log(data.total_pages);
                    console.log(data.page);
                });

            // CLEAN-UP FUNCTION
            return function () {
                fetch(URL_TO_SEARCH)
                    .then((resp) => resp.json())
                    .then((data) => {
                        dispatch(
                            searchedMoviesActionCreators.deleteSearchedMovie(
                                data.results
                            )
                        );

                        setIsLoading(false);
                    });
            };
        }
    }, []);

    useEffect(() => {
        console.log("SECOND useEffect");
        if (popularMoviesStored.length === 0) {
            setIsLoading(true);

            fetch(POPULAR_MOVIES)
                .then((resp) => resp.json())
                .then((data) => {
                    dispatch(
                        popularMoviesActionCreators.getPopularMovie(
                            data.results
                        )
                    );

                    setIsLoading(false);
                    setPage(page + 1);
                });
        } else if (popularMoviesStored.length === 20) {
            console.log("length =20");
            setPage(page + 1);
            return;
        }
    }, [dispatch]);

    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight;
            // console.log(scrolledToBottom);
            if (scrolledToBottom && !isLoading && !search) {
                console.log("Fetching more data...");
                setIsLoading(true);

                fetch(POPULAR_MOVIES)
                    .then((resp) => resp.json())
                    .then((data) => {
                        dispatch(
                            popularMoviesActionCreators.getPopularMovie(
                                data.results
                            )
                        );
                        console.log(data.results);

                        setIsLoading(false);
                        setPage(page + 1);
                        console.log(page + " del ONSCROLL POPULAR");
                    });
                // setPage(page + 1);
            } else if (scrolledToBottom && !isLoading && search) {
                console.log("Fetching more data (search)..." + search);
                setIsLoading(true);

                fetch(URL_TO_SEARCH)
                    .then((resp) => resp.json())
                    .then((data) => {
                        dispatch(
                            searchedMoviesActionCreators.getSearchedMovie(
                                data.results
                            )
                        );
                        console.log(data.results);
                        setIsLoading(false);
                        setPage(page + 1);
                        setHasMore(data.page < data.total_pages);
                        console.log(data.page);
                        console.log(page);
                        console.log(data.total_pages);
                    });
            } else if (hasMore === false) {
                return;
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [page, isLoading]);

    if (!isLoading && search !== "" && searchedMoviesStored.length === 0) {
        return <NoResults />;
    } else {
        return (
            <div className={styles.scroller}>
                <h1>Popular Movies</h1>
                {(search ? searchedMoviesStored : popularMoviesStored).map(
                    (movie, i) => {
                        return (
                            <ul key={i}>
                                <section className={styles.container}>
                                    <div className={styles.serie}>
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
                    }
                )}
            </div>
        );
    }
}

export default MovieCard;
