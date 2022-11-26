import { useSearchParams } from "react-router-dom";
import MovieCard from "../../../features/movies/components/pages/moviecard";

import SearchBar from "../searchbar/searchbar";
import styles from "./home.module.scss";
function Home() {
    const [query] = useSearchParams();
    const search: string = query.get("search") ?? "";
    return (
        <>
            <SearchBar />
            <h1 className={styles.popularMovies}>Popular Movies</h1>
            <div className={styles.movies}>
                <MovieCard key={search} search={search} />
            </div>
        </>
    );
}
export default Home;
