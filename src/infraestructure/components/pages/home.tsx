import MovieCard from "../../../features/movies/components/pages/moviecard";
import SearchBar from "../searchbar/searchbar";
import styles from "./home.module.scss";
function Home() {
    return (
        <>
            <SearchBar />
            <h1 className={styles.popularMovies}>Popular Movies</h1>
            <div className={styles.movies}>
                <MovieCard />
            </div>
        </>
    );
}
export default Home;
