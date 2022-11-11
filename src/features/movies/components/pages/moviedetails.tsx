import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./moviedetails.module.scss";
import { iMovie } from "../../interfaces/imovie";

// const movieInfo = "https://api.themoviedb.org/3/movie/550?api_key=04d110606a25e52db02f63a7d1e1d707";

const API_KEY = "api_key=04d110606a25e52db02f63a7d1e1d707";
const BASEAPI_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "&language=es&";
const imageURL = "https://image.tmdb.org/t/p/w300/";

function MovieDetails() {
    const initialState: iMovie = {
        title: "",
        id: 0,
        poster_path: "",
        overview: "",
        vote_average: 0,
        genres: [{ id: 0, name: "" }],
    };
    const [movie, setMovie] = useState(initialState);
    const { movieId } = useParams();

    // console.log("PARAM" + movieId);
    const GetById = BASEAPI_URL + `/movie/${movieId}?` + API_KEY + LANGUAGE;

    useEffect(() => {
        fetch(GetById)
            .then((resp) => resp.json())
            .then((data) => {
                setMovie(() => ({
                    title: data.title,
                    id: data.id,
                    poster_path: `${imageURL}` + data.poster_path,
                    overview: data.overview,
                    vote_average: data.vote_average,
                    genres: data.genres,
                }));
                // console.log(data.results);
            });
    }, [GetById]);

    if (movie && movie.genres != null) {
        return (
            <div className={styles.detailsContainer}>
                <img
                    className={styles.col}
                    src={movie.poster_path}
                    alt={movie.title}
                />
                <div className={styles.col}>
                    <p>
                        <strong>Título:</strong> {movie.title}
                    </p>

                    <p>
                        <strong>
                            {movie.genres.map((genre) => genre.name).join(", ")}
                        </strong>
                    </p>

                    <p>
                        <strong>Description:</strong> {movie.overview}
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>There is an error!!!</h1>
            </div>
        );
    }
}
export default MovieDetails;
