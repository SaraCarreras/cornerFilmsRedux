// import { RootState } from "../../../../infraestructure/store/store";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./moviedetails.module.scss";

import { useDispatch } from "react-redux";

import { iMovie } from "../../interfaces/imovie";

// const movieInfo =
//     "https://api.themoviedb.org/3/movie/550?api_key=04d110606a25e52db02f63a7d1e1d707";

const API_KEY = "api_key=04d110606a25e52db02f63a7d1e1d707";
const BASEAPI_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "&language=es&";

// const POPULAR_MOVIES =
//     BASEAPI_URL + "/movie/popular?" + API_KEY + LANGUAGE + POPULAR_PAGE;

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
    const dispatch = useDispatch();
    // console.log("PARAM" + movieId);
    const GetById = BASEAPI_URL + `/movie/${movieId}?` + API_KEY + LANGUAGE;
    const imageURL = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;

    useEffect(() => {
        fetch(GetById)
            .then((resp) => resp.json())
            .then((data) => {
                setMovie(data);
                // console.log(data.results);
            });
    }, [dispatch, GetById]);

    if (movie && movie.genres != null) {
        return (
            <div className={styles.detailsContainer}>
                <img className={styles.col} src={imageURL} alt={movie.title} />
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
