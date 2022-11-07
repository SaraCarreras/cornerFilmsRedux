// import { RootState } from "../../../../infraestructure/store/store";
// import { useDispatch, useSelector } from "react-redux";
import styles from "./moviedetails.module.scss";
import movie from "./movies.json";

// const movieInfo =
//     "https://api.themoviedb.org/3/movie/550?api_key=04d110606a25e52db02f63a7d1e1d707";

function MovieDetails() {
    // const movies = useSelector((state) => (state as RootState).movies);
    console.log(movie);

    const imageURL = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
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
}
export default MovieDetails;
