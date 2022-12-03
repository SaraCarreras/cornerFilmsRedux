import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./moviedetails.module.scss";
import { iParam } from "../../interfaces/imovie";
import { RootState } from "../../../../infraestructure/store/store";
import React from "react";

function MovieDetails() {
    const imageURL = "https://image.tmdb.org/t/p/w500/";

    const movies = useSelector((state) => (state as RootState).movies);

    const { movieId } = useParams<keyof iParam>() as iParam;

    const moviesFiletered = movies.filter(
        (movie) => movie.id.toString() === movieId
    );

    // if(isLoading){
    //     return <Spinner />;
    // }
    return moviesFiletered ? (
        <>
            {moviesFiletered.map((element, i) => {
                console.log(element.poster_path);
                return element && element.id != null ? (
                    <React.Fragment key={element.title}>
                        <div className={styles.detailsContainer}>
                            {element.poster_path ? (
                                <img
                                    className={styles.col}
                                    src={imageURL + element.poster_path}
                                    alt={element.title}
                                />
                            ) : (
                                <div className={styles.errorImage}>
                                    <h1>
                                        🔻Sorry, we don't have the poster
                                        image😱
                                    </h1>
                                </div>
                            )}

                            <div className={styles.col}>
                                <p>
                                    <strong>Description: </strong>
                                    {element.overview}
                                </p>

                                <p>
                                    <strong key={i + 8}>Title: </strong>{" "}
                                    {element.title}
                                </p>

                                <p>
                                    <strong>Release date: </strong>
                                    {element.release_date}
                                </p>
                            </div>
                        </div>
                    </React.Fragment>
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
