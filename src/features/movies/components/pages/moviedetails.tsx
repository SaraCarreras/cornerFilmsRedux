import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./moviedetails.module.scss";
import { iParam } from "../../interfaces/imovie";
import { RootState } from "../../../../infraestructure/store/store";

const imageURL = "https://image.tmdb.org/t/p/w300/";

function MovieDetails() {
    const movies = useSelector((state) => (state as RootState).movies);

    const { movieId } = useParams<keyof iParam>() as iParam;

    const moviesFiletered = movies.filter(
        (movie) => movie.id.toString() === movieId
    );

    return moviesFiletered ? (
        <>
            {moviesFiletered.map((element) => {
                return element && element.id != null ? (
                    <>
                        <div
                            key={element.id}
                            className={styles.detailsContainer}
                        >
                            <img
                                className={styles.col}
                                src={`${imageURL}` + element.poster_path}
                                alt={element.title}
                            />

                            <p>
                                <strong>Description: </strong>
                                {element.overview}
                            </p>
                        </div>
                        <div className={styles.col}>
                            <p>
                                <strong>Título: </strong> {element.title}
                            </p>

                            <p>
                                <strong>Fecha de estreno: </strong>
                                {element.release_date}
                            </p>
                        </div>
                    </>
                ) : (
                    <h1>"We didn't find the Movie Details."</h1>
                );
            })}
        </>
    ) : (
        <h1>"We didn't find the Movie."</h1>
    );
}
export default MovieDetails;
